import { SignUp } from '@clerk/nextjs';

export default function Page() {
    return (
        <SignUp
            path="/sign-up"
            routing="path"
            signInForceRedirectUrl="/onboarding" // If the user signs in after sign-up, redirect herexw
        />
    );
}
