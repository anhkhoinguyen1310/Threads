import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation"
import { getActivities, getAllUsers, getUser } from "@/lib/actions/user.actions";
import Link from "next/link";
import Image from "next/image";


async function Page() {
    // get current user
    const user = await currentUser();
    if (!user) return null;
    //fetch user
    const userInfo = await getUser(user.id);
    if (!userInfo?.onboarded) redirect('/onboarding');

    //get Activity
    const activity = await getActivities(userInfo._id);
    return (
        <section>
            <h1 className="head-text mb-10">
                Activity
            </h1>
            <section className="mt-10 flex flex-col gap-5">
                {activity.length > 0 ? (
                    <>
                        {activity.map((act) => (
                            <Link key={act._id}
                                href={`/thread/${act.parentId}`}>
                                <article className="activity-card">
                                    <Image
                                        src={act.author.image}
                                        alt="Profile Image"
                                        width={40}
                                        height={40}
                                        className="rounded-full object-contain" />
                                    <p className="!text-light-1">
                                        <span className="mr-1 text-purple-500">
                                            {act.author.name}
                                        </span>
                                        replied to your thread
                                    </p>

                                </article>
                            </Link>

                        ))}

                    </>
                ) : <p className="!text-base-regular text-light-3">No activities yet</p>}
            </section>
        </section>

    )
}

export default Page
