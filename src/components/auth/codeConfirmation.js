"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '@/redux/reducers/authReducers';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import Link from 'next/link';

export default function ForgotPassword() {
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
            const resultAction = await dispatch(forgotPassword(data.email));
            
            if (forgotPassword.fulfilled.match(resultAction)) {
                toast.success(resultAction.payload.message);
                router.push('/password-recovery');
            }
            
            if (forgotPassword.rejected.match(resultAction)) {
                const errorMessage = resultAction.payload?.message || 'Password reset request failed';
                toast.error(errorMessage);
            }
        } catch (error) {
            toast.error(error?.message || 'An error occurred');
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
            <div className="w-full sm:mx-auto sm:w-full sm:max-w-md">
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    className="!font-sans"
                />
                <h1 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                    Check your email for code
                </h1>
                <p className="text-center text-sm sm:text-base font-medium pt-2 mt-2 px-4 sm:px-0">
                    A code has been sent to your email, input it to complete your registration
                </p>
            </div>
            
            <div className="mt-6 sm:mt-8 w-full sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-6 px-4 sm:py-8 sm:rounded-lg sm:px-10">
                    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2.5 sm:py-2 text-base sm:text-sm shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-yellow-500"
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs sm:text-sm text-red-600">
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
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2.5 sm:py-2 text-base sm:text-sm shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-yellow-500"
                            />
                            {errors.code && (
                                <p className="mt-1 text-xs sm:text-sm text-red-600">
                                    {errors.code.message}
                                </p>
                            )}
                        </div>
                        
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-3 sm:py-2.5 px-4 border border-transparent rounded-full shadow-sm text-base sm:text-sm font-medium text-white bg-[#2A2F38] hover:bg-[#2A2F38] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A2F38] disabled:opacity-50"
                        >
                            {loading ? 'Loading...' : 'Continue'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}