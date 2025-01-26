"use client";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOTP } from '@/redux/reducers/authReducers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function SignupConfirmation() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { loading, error } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const verificationData = {
                email: data.email,
                otp: data.code
            };
            
           

            console.log('Thisis the verifcation: ',verificationData);

            const resultAction = await dispatch(verifyOTP(verificationData));
            if (verifyOTP.fulfilled.match(resultAction)) {
                toast.success(resultAction.payload.message);
                router.push('/login');
            }
            if (verifyOTP.rejected.match(resultAction)) {
                // Handle API error response
                const errorMessage = resultAction.payload?.message || 'Verification failed';
                toast.error(errorMessage);
                return;
            }

        } catch (error) {
            toast.error(error?.message || 'Verification failed');
            const errorMessage = error.response?.data?.message || error.message || 'Network error occurred';
            toast.error(errorMessage);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                className="!font-sans"
            />
                <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                    Check your email for code
                </h1>
                <p className="text-center font-medium pt-2 mt-2">
                    A code has been sent to your email, input it to complete your registration
                </p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                type="email"
                                placeholder="Email"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <input
                                {...register('code', {
                                    required: 'Verification code is required',
                                    pattern: {
                                        value: /^[0-9]{6}$/,
                                        message: 'Please enter a valid 6-digit code'
                                    }
                                })}
                                type="text"
                                placeholder="Code"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                            />
                            {errors.code && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.code.message}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#2A2F38] hover:bg-[#2A2F38] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A2F38] disabled:opacity-50"
                        >
                            {loading ? 'Loading...' : 'Continue'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}