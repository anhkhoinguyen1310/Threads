"use server"

import { connectDb } from "../mongoose"
import User from "../models/user.model"
import { revalidatePath } from "next/cache";
import Thread from "../models/thread.model";
import { FilterQuery, SortOrder } from "mongoose";
import Community from "../models/community.model";



interface Params {
    userId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
    path: string;
}
export async function updateUser({
    userId,
    username,
    name,
    bio,
    image,
    path,

}: Params) {
    connectDb();
    try {
        await User.findOneAndUpdate(
            { id: userId },
            {

                username: username.toLowerCase(),
                name,
                bio: bio,
                image: image,
                onboarded: true,
            },
            { upsert: true },
        );
        if (path === '/profile/edit') {
            revalidatePath(path);
        }

    }
    catch (error: any) {
        throw new Error(`fail to create/update users ${error.message}`);
    }

}
export async function getUser(userId: string) {
    connectDb();
    try {
        return await User.findOne({ id: userId })
            .populate({
                path: "communities",
                model: Community,

            })
    } catch (error: any) {
        throw new Error(`fail to get user ${error.message}`);
    }
}

export async function fetchUserPosts(userId: string) {
    connectDb();
    try {
        //find all threads authored by user with the given userId
        const threads = await User.findOne({ id: userId })
            .populate({
                path: 'threads',
                model: Thread,
                populate: [
                    {
                        path: "community",
                        model: Community,
                        select: "name id image _id", // Select the "name" and "_id" fields from the "Community" model
                    },
                    {
                        path: "children",
                        model: Thread,
                        populate: {
                            path: "author",
                            model: User,
                            select: "name image id", // Select the "name" and "_id" fields from the "User" model
                        },
                    },
                ],
            });

        return threads;

    } catch (error: any) {
        console.log(`fail to fetch user posts ${error.message}`);
    }
}

export async function getAllUsers({
    userId,
    searchString = '',
    pageNumber = 1,
    pageSize = 20,
    sortBy = "desc"
}: {
    userId: string;
    searchString?: string;
    pageNumber?: number;
    pageSize?: number;
    sortBy?: SortOrder;
}) {
    try {
        connectDb();
        //calculate the number of users to skip based on pageNumber and pageSize
        const skipAmount = (pageNumber - 1) * pageSize;
        const regex = new RegExp(searchString, 'i');
        const query: FilterQuery<typeof User> = {
            id: { $ne: userId },
        }
        // If the search string is not empty, add the $or operator to match either username or name fields.
        if (searchString.trim() !== '') {
            query.$or = [
                { name: regex },
                { username: regex }
            ]
        }
        const sortOptions = { createdAt: sortBy };
        const usersQuery = User.find(query).sort(sortOptions).skip(skipAmount).limit(pageSize);
        const totalUsersCount = await User.countDocuments(query);
        const users = await usersQuery.exec();
        const isNext = totalUsersCount > skipAmount + users.length;
        return { users, isNext };
    } catch (error: any) {
        throw new Error(`fail to get all users ${error.message}`);
    }
}

export async function getActivities(userId: string) {

    try {
        connectDb();
        //find all threads authored by user with the given userId
        const userThread = await Thread.find({ author: userId })

        //collect all the child thread ids(replies) from the 'children field

        const childThreadIds = userThread.reduce((acc, thread) => { return acc.concat(thread.children) }, [])
        const replies = await Thread.find(
            {
                _id: { $in: childThreadIds },
                author: { $ne: userId }
            }).populate(
                { path: 'author', model: User, select: 'name image _id' })
        return replies;
    } catch (error: any) {
        throw new Error(`fail to get activities ${error.message}`);
    }
}