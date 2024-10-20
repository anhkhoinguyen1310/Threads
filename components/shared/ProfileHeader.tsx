import React from 'react'
import Image from 'next/image';

interface Props {
    accountId: string;
    authUserId: string;
    name: string;
    username: string;
    imgUrl: string;
    bio: string;
    type?: string;

}
const ProfileHeader = ({
    accountId,
    authUserId,
    name,
    username,
    imgUrl,
    bio,
    type,

}: Props) => {
    return (
        //structure for the username and name
        <div className="flex w-full flex-col justify-start ">
            <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                    <div className="relative h-20 w-20 object-cover">
                        <Image
                            src={imgUrl}
                            alt="Profile Image"
                            fill
                            className="rounded-full object-cover shadow-2x1" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-left text-heading3-bold text-light-1">
                            {name}
                        </h2>
                        <p className="text-left text-base-medium text-gray-1">
                            @{username}
                        </p>
                    </div>
                </div>
            </div>

            <p className="mt-6 max-w-lg text-base-regular text-light-2">
                {bio}
            </p>

        </div>
    )
}

export default ProfileHeader