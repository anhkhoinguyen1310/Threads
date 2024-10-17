"use server"
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    image: String,
    bio: String,
    threads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
    onboarded: {
        type: Boolean,
        default: false,
    },
    communities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Community',
        }
    ]
});

// Define the User model with the schema because the first time the model is not created
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;