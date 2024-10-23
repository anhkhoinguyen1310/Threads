"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import { editThread } from "@/lib/actions/thread.actions";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from '../ui/textarea';

interface Props {
    threadId: string;
    currentUserId: string;
    authorId: string;
    initialText: string;
}

function EditThread({
    threadId,
    currentUserId,
    authorId,
    initialText,
}: Props) {
    const pathname = usePathname();
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(initialText);

    // If the user is not the author or on the home page, don't show the edit option
    if (currentUserId !== authorId || pathname === "/") return null;

    const handleEdit = async () => {
        try {
            await editThread({ threadId, newText, path: pathname });
            toast.success("Thread edited successfully");
            setIsEditing(false);// Close the edit form
            router.refresh(); // Refresh the router to update the page
        } catch (error) {
            toast.error("Failed to edit the thread");
        }
    };

    return (
        <div>
            {isEditing ? (
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Textarea
                        placeholder="Edit Text"
                        value={newText}
                        className='no-focus '
                        onChange={(e) => setNewText(e.target.value)}
                    />

                    <Button
                        className="bg-primary-500 text-white px-2 py-1 rounded"
                        onClick={handleEdit}
                    >
                        Save
                    </Button>
                    <Button
                        className="bg-gray-500 text-white px-2 py-1 rounded"
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </Button>
                </div>
            ) : (
                <Image
                    src='/assets/edit.svg'
                    alt='edit'
                    width={18}
                    height={18}
                    className='cursor-pointer object-contain mr-2'
                    onClick={() => setIsEditing(true)}
                />
            )}
        </div>
    );
}

export default EditThread;
