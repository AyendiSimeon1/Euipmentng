import SignupConfirmation from "@/components/auth/signupConfirmation";
import { Suspense } from 'react';

export default function SignupConfirmationPage () {
    return (
    <Suspense fallback={<div>Loading...</div>}>
    <SignupConfirmation />
    </Suspense>
)}