"use server"
import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    image: String,
    bio: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    threads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }]

});

// Define the Community model with the schema because the first time the model is not created
const Community = mongoose.models.Community || mongoose.model('Community', communitySchema);

export default Community;

