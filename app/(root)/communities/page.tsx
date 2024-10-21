import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation"
import { getAllUsers, getUser } from "@/lib/actions/user.actions";
import ProfileHeader from "@/components/shared/ProfileHeader";

import { profileTabs } from "@/constants";
import Image from "next/image";
import UserCard from "@/components/cards/UserCard";
import { fetchCommunities } from "@/lib/actions/community.actions";
import CommunityCard from "@/components/cards/CommunityCard";


async function Page() {
    // get current user
    const user = await currentUser();
    if (!user) return null;
    //fetch user
    const userInfo = await getUser(user.id);
    if (!userInfo?.onboarded) redirect('/onboarding');

    //fetch all Communities
    const result = await fetchCommunities(
        {
            searchString: '',
            pageNumber: 1,
            pageSize: 25

        }
    )
    return (
        <section>
            <h1 className="head-text mb-10">
                Search
            </h1>
            <div className="mt-15 flex flex-col gap-9">
                {result.communities.length === 0 ? (
                    <p className="no-result">
                        No Users
                    </p>
                ) : (
                    <>
                        {result.communities.map((communiy) => (
                            <CommunityCard
                                //key={person.id}
                                id={communiy.id}
                                name={communiy.name}
                                username={communiy.username}
                                imgUrl={communiy.image}
                                bio={communiy.bio}
                                members={communiy.members}
                            />

                        ))}
                    </>
                )}
            </div>
        </section>

    )
}

export default Page