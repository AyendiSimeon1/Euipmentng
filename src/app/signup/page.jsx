import SignUpForm from "@/components/auth/signup";
import Head from 'next/head';

const metadata = {
    title: 'Equiments.ng | Signup',
    description: 'Signup',
}
  
export default function SignupPage() {

    return (
        <div>
             <Head>
                <title>About Us - My App</title>
                <meta name="description" content="Learn more about us on this page" />
            </Head>
                <SignUpForm />;
        </div>
    )
   
}