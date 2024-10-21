"use client";
import { sidebarLinks } from '@/constants';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SignedIn, SignOutButton, useAuth, SignInButton, SignedOut } from '@clerk/nextjs';

function BottomBar() {
    const pathname = usePathname();
    return (
        <section className="bottombar">
            <div className="bottombar_container flex items-center justify-between px-4 py-2">
                {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
                    return (
                        <Link href={link.route}
                            key={link.label}
                            className={`bottombar_link ${isActive ? 'bg-primary-500' : ''}`}>
                            <Image
                                src={link.imgURL}
                                alt={link.label}
                                width={24}
                                height={24} />
                            <p className="text-subtle-medium text-light-1 max-sm:hidden">
                                {link.label.split(/\s+/)[0]}
                            </p>
                        </Link>
                    )
                })}

                <SignedOut>
                    <SignInButton signUpForceRedirectUrl="/sign-in">
                        <div className="bottombar_link flex items-center cursor-pointer p-2">
                            <Image src="/assets/login.svg"
                                alt="login"
                                width={24}
                                height={24} />
                            <p className="text-subtle-medium text-light-1 max-sm:hidden">
                                Sign-In
                            </p>
                        </div>
                    </SignInButton>
                </SignedOut>
            </div>
        </section>
    )
}

export default BottomBar;