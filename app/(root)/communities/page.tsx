import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation"
import { getAllUsers, getUser } from "@/lib/actions/user.actions";
import ProfileHeader from "@/components/shared/ProfileHeader";

import { profileTabs } from "@/constants";
import Image from "next/image";
import UserCard from "@/components/cards/UserCard";
import { fetchCommunities } from "@/lib/actions/community.actions";
import CommunityCard from "@/components/cards/CommunityCard";
import Searchbar from "@/components/shared/SearchBar";
import Pagination from "@/components/shared/Pagination";

async function Page({ searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) {
    // get current user
    const user = await currentUser();
    if (!user) return null;
    //fetch user
    const userInfo = await getUser(user.id);
    if (!userInfo?.onboarded) redirect('/onboarding');

    //fetch all Communities
    const result = await fetchCommunities(
        {
            searchString: searchParams.q,
            pageNumber: searchParams?.page ? +searchParams.page : 1,
            pageSize: 25

        }
    )
    return (
        <>
            <section>
                <h1 className="head-text mb-10">
                    Communities
                </h1>

                <div className='mt-5'>
                    <Searchbar routeType='communities' />
                </div>
                <section className="mt-15 flex flex-col gap-9">
                    {result.communities.length === 0 ? (
                        <p className="no-result">
                            No Result
                        </p>
                    ) : (
                        <>
                            {result.communities.map((community) => (
                                <CommunityCard
                                    key={community.id}
                                    id={community.id}
                                    name={community.name}
                                    username={community.username}
                                    imgUrl={community.image}
                                    bio={community.bio}
                                    members={community.members}
                                />

                            ))}
                        </>

                    )}
                </section>
            </section>
            <Pagination
                path='communities'
                pageNumber={searchParams?.page ? +searchParams.page : 1}
                isNext={result.isNext}
            />
        </>

    )
}

export default Page