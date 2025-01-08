"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

export default function ForgotPassword () {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const onSubmit = async(data) => {
        try {
            setIsLoading(true);
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                   Change to a new password
                </h2>
                <p className="text-center text-gray-600 mt-4">Please input confirmation code to change password</p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className='bg-white py-8 px-4 sm:rounded-lg sm:px-10'>
                    <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            
                            <input
                                type='text'
                                placeholder='Code'
                                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500'
                                {...register('code')}
                            />
                            {errors.code && (
                                <p className='mt-1 text-sm text-red-600'>
                                    {errors.code.message}
                                </p>
                            )}
                        </div>
                        <div>
                       
                        <div className="relative">
                            <input
                            {...register('password')}
                            placeholder='Password'
                            type={showPassword ? 'text' : 'password'}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
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
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">
                            {errors.password.message}
                            </p>
                        )}
                        </div>

                        <div>
                     
                        <div className="relative">
                            <input
                            {...register('confirmPassword')}
                            placeholder='Confirm Password'
                            type={showConfirmPassword ? 'text' : 'password'}
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                            />
                            <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                            {showConfirmPassword ? (
                                <EyeOff className="h-4 w-4 text-gray-500" />
                            ) : (
                                <Eye className="h-4 w-4 text-gray-500" />
                            )}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="mt-1 text-sm text-red-600">
                            {errors.confirmPassword.message}
                            </p>
                        )}
                        </div>

                        <div className='mt-6 flex justify-center'>
                            <button 
                                type='button'
                                className='w-full max-w-xs inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 bg-yellow-400 hover:bg-gray-50 focus:outline-none'>
                                    Continue
                                </button>
                        </div>
                    </form>     
                </div>
            </div>
        </div>
    );
}