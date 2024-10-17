import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation"
import { getUser } from "@/lib/actions/user.actions";
import { PostThread } from "@/components/forms/PostThread";


async function Page() {
    // get current user
    const user = await currentUser();
    if (!user) return null;
    //fetch user
    const userInfo = await getUser(user.id);
    if (!userInfo?.onboarded) redirect('/onboarding');

    return (
        <>
            <h1 className="head-text">
                Create Thread
            </h1>
            <PostThread userId={userInfo._id} />

        </>

    )
}

export default Page