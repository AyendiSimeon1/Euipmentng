"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function SignupConfirmation() {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
    });

    const onSubmit = async(data) => {
        try {
            setIsLoading(true);
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        };

    };
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h1 className='text-center text-3xl font-bold tracking-tight text-gray-900'>
                    Check your email for code
                </h1>
                <p className='text-center font-medium pt-2 mt-2'>A code has been sent to your email, input it to complete your registration</p>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className='bg-white py-8 px-4 sm:rounded-lg sm:px-10'>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                {...register('code')}
                                type='text'
                                placeholder='code'
                                className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2'
                            />
                            {errors.code && (
                                <p className='mt-1 text-sm text-red-600'>
                                    {errors.code.message}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
                        >
                            {isLoading ? 'Loading...' : 'Contine'}
                        </button>

                    </form>
                </div>
            </div>
        </div>
        
    )
}
