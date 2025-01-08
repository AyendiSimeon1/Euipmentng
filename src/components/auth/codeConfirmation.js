"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

export default function CodeConfirmation () {
    const [showPassword, setShowPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
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
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                    Check your email for the confirmation code
                </h2>
                <p className="text-center text-gray-600 mt-4">A code has been sent to your email, input it to complete your registration</p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label
                                htmlFor='code'
                                className='block text-sm font-medium text-gray-700'
                            />
                            <input
                                type='text'
                                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500'
                                {...register('code')}
                            />
                            {errors.code && (
                                <p className='mt-1 text-sm text-red-600'>
                                    {errors.code.message}
                                </p>
                            )}
                        </div>
                        <div className='mt-6 grid grid-cols-2 gap-3 justify-center'>
                            <button 
                                type='button'
                                className='w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outlien'>
                                    Continue
                                </button>
                        </div>
                    </form>     
                </div>
            </div>
        </div>
    );
}