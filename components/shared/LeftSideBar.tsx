"use client";
import React from 'react'
import { sidebarLinks } from '@/constants/index'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { SignedIn, SignOutButton, useAuth, SignInButton, SignedOut } from '@clerk/nextjs';


function LeftSideBar() {
    const pathname = usePathname();
    const { userId } = useAuth();
    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                    if (link.route === '/profile') link.route = `${link.route}/${userId}`
                    return (
                        <Link href={link.route}
                            key={link.label}
                            className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}>
                            <Image
                                src={link.imgURL}
                                alt={link.label}
                                width={24}
                                height={24} />
                            <p className="text-light-1">
                                {link.label}
                            </p>
                        </Link>

                    )
                })}
            </div>
            <div className="mt-10 px-6">
                <SignedOut>
                    <SignInButton signUpForceRedirectUrl="/sign-in">
                        <div className="flex cursor-pointer gap-4 p-4">
                            <Image src="/assets/login.svg"
                                alt="logout"
                                width={24}
                                height={24} />
                            <p className="text-light-2 max-lg:hidden"> Sign-In</p>
                        </div>
                    </SignInButton>
                </SignedOut>
            </div>

            <div className="mt-10 px-6">
                <SignedIn>
                    <SignOutButton redirectUrl="/sign-in">
                        <div className="flex cursor-pointer gap-4 p-4">
                            <Image src="/assets/logout.svg"
                                alt="logout"
                                width={24}
                                height={24} />
                            <p className="text-light-2 max-lg:hidden"> Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </section>
    )
}

export default LeftSideBar