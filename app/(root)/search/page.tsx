import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation"
import { getAllUsers, getUser } from "@/lib/actions/user.actions";
import ProfileHeader from "@/components/shared/ProfileHeader";

import { profileTabs } from "@/constants";
import Image from "next/image";
import UserCard from "@/components/cards/UserCard";

import Pagination from "@/components/shared/Pagination";
import Searchbar from "@/components/shared/SearchBar";




async function Page({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) {
    // get current user
    const user = await currentUser();
    if (!user) return null;
    //fetch user
    const userInfo = await getUser(user.id);
    if (!userInfo?.onboarded) redirect('/onboarding');

    //fetch all user
    const result = await getAllUsers(
        {
            userId: user.id,
            searchString: searchParams.q,
            pageNumber: searchParams?.page ? +searchParams.page : 1,
            pageSize: 25

        }
    )


    return (
        <section>
            <h1 className="head-text mb-10">
                <Searchbar routeType='search' />
            </h1>
            <div className="mt-15 flex flex-col gap-9">
                {result.users.length === 0 ? (
                    <p className="no-result">
                        No Result
                    </p>
                ) : (
                    <>
                        {result.users.map((person) => (
                            <UserCard
                                key={person.id}
                                id={person.id}
                                name={person.name}
                                username={person.username}
                                imgUrl={person.image}
                                personType='User'
                            />

                        ))}
                    </>
                )}
            </div>
            <Pagination
                path='search'
                pageNumber={searchParams?.page ? +searchParams.page : 1}
                isNext={result.isNext}
            />
        </section>

    )
}

export default Page