
import Link from 'next/link'
import Image from 'next/image'
import { OrganizationSwitcher, SignedIn, SignOutButton, SignInButton, SignedOut } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

function Topbar() {
    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4" >
                <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
                <p className="text-heading3-bold  text-light-1 max-xs:hidden">
                    Threads
                </p>
            </Link>
            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image src="/assets/logout.svg"
                                    alt="logout"
                                    width={24}
                                    height={24} />
                            </div>
                        </SignOutButton>

                    </SignedIn>
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
                <OrganizationSwitcher
                    appearance={{
                        baseTheme: dark,
                        elements: {
                            organizationSwitcherTrigger: "py-2 px-4",
                        }
                    }}
                />

            </div>
        </nav>
    )
}

export default Topbar