import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (<SignIn
        path="/sign-in"
        routing="path"
        fallbackRedirectUrl="/onboarding" />// If the user signs in after sign-up, redirect here
    )
}