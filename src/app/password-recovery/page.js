import ForgotPassword from "@/components/auth/passwordRecovery";
import { Suspense } from 'react';

  
export default function PasswordRecoveryPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
        <ForgotPassword />
        </Suspense>
    )
}