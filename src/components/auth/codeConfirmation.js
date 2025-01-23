"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '@/redux/reducers/authReducers';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

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
        <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                    Forgot Password?
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Enter your email address and we'll send you a code to reset your password
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
                                placeholder="Enter your email"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-yellow-500"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#2A2F38] hover:bg-[#2A2F38] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
                        >
                            {loading ? 'Sending...' : 'Send Reset Code'}
                        </button>
                    </form>

                    <div className="mt-6">
                        <p className="text-center text-sm">
                            Remember your password?{' '}
                            <a href="/login" className="font-medium text-[#2A2F38] hover:text-gray-700">
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}