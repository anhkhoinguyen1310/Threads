"use server";
import { connectDb } from "../mongoose";
import Thread from "../models/thread.model";
import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import path from "path";


interface Params {
    text: string;
    author: string;
    community: string | null;
    path: string;

}

export async function createThread({ text, author, community, path }: Params) {
    try {
        connectDb();
        const createThread = await Thread.create({
            text,
            author,
            community: null,
        });
        //Update user Model
        //push it to the user who created the thread
        await User.findByIdAndUpdate(author, {
            $push: { threads: createThread._id }
        })
        revalidatePath(path);
    }
    catch (error: any) {
        throw new Error(`fail to create thread ${error.message}`)
    }


}

export async function fetchPosts(pageNumber = 1, pageSize = 20) {

    connectDb();
    //calculate the skip value
    const skipAmount = pageSize * (pageNumber - 1);
    //FEtch the posts that have no parents(top-level threads..)
    const postsQuery = Thread.find({ parentId: { $in: [null, undefined] } })
        .sort({ createdAt: 'desc' }) //sort from last to first
        .skip(skipAmount)
        .limit(pageSize)
        .populate({ path: 'author', model: User })
        .populate({
            path: 'children',
            populate: {
                path: 'author',
                model: User,
                select: "_id name parentId image"
            }
        })

    const totalPostsCount = await Thread.countDocuments({ parentId: { $in: [null, undefined] } });
    const posts = await postsQuery.exec();
    const isNext = totalPostsCount > skipAmount + posts.length;//means there are more posts to fetch
    return { posts, isNext };


}

export async function fetchThreadById(threadId: string) {
    connectDb();
    const thread = await Thread.findById(threadId)
        .populate({
            path: 'author',
            model: User,
            select: "_id name parentId image"

        })
        //populate the comment
        .populate({
            path: 'children',
            //each child thread got populated with 
            //an author of that specific comment
            populate: [{
                path: 'author',
                model: User,
                //select specific id
                select: "_id name parentId image"
            },
            //populate the threadcomment itself
            {
                path: 'children',
                model: Thread,
                populate: {
                    path: 'author',
                    model: User,
                    select: "_id name parentId image"
                }
            }]
        }).exec();
    return thread;
}
export async function addCommentToThread(
    threadId: string,
    commentText: string,
    userId: string,
    path: string,
) {
    connectDb();
    try {
        //find the original thread by its Id
        const originalThread = await Thread.findById(threadId);
        if (!originalThread) {
            throw new Error("Thread not found");
        }
        //create a new thread(comment)
        const commentThread = new Thread({
            text: commentText,
            author: userId,
            parentId: threadId,
        });
        //save the new threads to database
        const saveCommentThread = await commentThread.save();
        //update the original thread with the new comment
        originalThread.children.push(saveCommentThread._id);
        //save the original thread
        await originalThread.save();
        revalidatePath(path);

    } catch (error: any) {
        throw new Error(`fail to add comment ${error.message}`);
    }

}