"use client";
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function ChangePassword() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePassword1 = () => setShowPassword1(prev => !prev);
    const togglePassword2 = () => setShowPassword2(prev => !prev);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <div className="flex-1 p-8 max-w-2xl mx-8">
            <div className='bg-white px-3 py-1 rounded-lg mx-6'>
                <h1 className="text-2xl font-semibold mb-8">Change Password</h1>
            </div>
            <div className='bg-white px-6 py-6 mt-6 mb-6 rounded-lg mx-8'>
                <form className="space-y-7 mt-10">
                    <div className='space-y-4'>
                        <div className='relative'>
                            <input
                                {...register('password1')}
                                type={showPassword1 ? 'text' : 'password'}
                                placeholder='Current Password'
                                className='mt-2 block w-full rounded-md border border-gray-600 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500'
                            />
                            <button
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                                type="button"
                                onClick={togglePassword1}
                            >
                                {showPassword1 ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                            {errors.password1 && (
                                <p className='mt-2 text-sm text-red-600'>
                                    {errors.password1.message}
                                </p>
                            )}
                        </div>

                        <div className='relative'>
                            <input
                                {...register('password2')}
                                type={showPassword2 ? 'text' : 'password'}
                                placeholder='New Password'
                                className='mt-2 block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500'
                            />
                            <button 
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" 
                                type='button'
                                onClick={togglePassword2}
                            >
                                {showPassword2 ? <EyeOff className='w-5 h-5' /> : <Eye className='w-5 h-5' />}
                            </button>
                            {errors.password2 && (
                                <p className='mt-1 text-sm text-red-600'>
                                    {errors.password2.message}
                                </p>
                            )}
                        </div>

                        <div className='relative'>
                            <input
                                {...register('password3')}
                                type='password'
                                placeholder='Confirm New Password'
                                className='mt-2 block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500'
                            />
                            {errors.password3 && (
                                <p className='text-sm mt-1 text-red-500'>
                                    {errors.password3.message}
                                </p>
                            )}
                        </div>

                        <button
                            className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}