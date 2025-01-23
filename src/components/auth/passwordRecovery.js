"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '@/redux/reducers/authReducers';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';

export default function PasswordRecovery() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { loading, error } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const resetData = {
                email: data.email,
                otp: data.code,
                newPassword: data.password
            };

            const resultAction = await dispatch(resetPassword(resetData));
            
            if (resetPassword.fulfilled.match(resultAction)) {
                toast.success(resultAction.payload.message);
                router.push('/');
            }
            
            if (resetPassword.rejected.match(resultAction)) {
                const errorMessage = resultAction.payload?.message || 'Password reset failed';
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
                <p className="text-center text-gray-600 mt-4">
                    Please input confirmation code to change password
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
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-yellow-500"
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
                                    required: 'Code is required',
                                    pattern: {
                                        value: /^[0-9]{6}$/,
                                        message: 'Please enter a valid 6-digit code'
                                    }
                                })}
                                type="text"
                                placeholder="Code"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-yellow-500"
                            />
                            {errors.code && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.code.message}
                                </p>
                            )}
                        </div>

                        <div className="relative">
                            <input
                                {...register('password', {
                                    required: 'New password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters'
                                    }
                                })}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="New Password"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-yellow-500"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-500" />
                                ) : (
                                    <Eye className="h-4 w-4 text-gray-500" />
                                )}
                            </button>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#2A2F38] hover:bg-[#2A2F38] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
                        >
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}