"use server";
import { create } from 'domain';
import mongoose from 'mongoose';
import { comma } from 'postcss/lib/list';

const threadSchema = new mongoose.Schema({
    text: { type: String, required: true },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    community: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    parentId: {
        type: String,
    },
    //one thread can have multiple thread as children
    //Thread Original(parent)
    // -Thread Comment1(child)
    // -Thread Comment2(child)
    //  -Thread Comment3 (grandchild)
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thread',
    }]
})
const Thread = mongoose.models.Thread || mongoose.model('Thread', threadSchema);

export default Thread;