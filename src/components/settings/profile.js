"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { StickyNoteIcon } from 'lucide-react';
import { PencilLine } from 'lucide-react';
import InputField from "./InputField";

export default function Profile () {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            console.log(data);
        } catch (error) {
            console.log('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleInputChange = (e) => {
        const { name, target } = e.target;
        dispatchEvent({
            type: 'UPDATE_PROFILE',
            payload: { [name]: value }
        });
    }
    const handleSave = () => {
        dispatch ({ type: 'SAVE_PROFILE', payload: profile });
    };

    return (
        <div className="flex-1 p-8 max-w-2xl">
            <div className='bg-white px-3 mx-6 py-1 rounded-lg'>
                <h1 className="text-xl font-semibold mb-8">Set up Profile</h1>
            </div>
            <div className=" mt-3 bg-white mt-4 mx-6 px-6 py-2 rounded-lg">
                <div className="mb-8 flex justify-center ">
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full overflow-hidden">
                            <img
                                src="/future.jpeg"
                                alt= "Profile"
                                className="w-full h-full object-cover"
                            />
                         
                         <PencilLine  className="fas fa-bug absolute bottom-4 right-4 text-dark p-1 text-xl bg-yellow-200 rounded-full" />
    
                        </div>
    
                    </div>
                </div>
                <div className='bg-white'>
                <form className="space-y-4">
                    <input
                        {...register('surname')}
                        type='text'
                        placeholder='Surname'
                        className='mt-1 block w-full rounded-md border border-gray-600 px-3 py-2 shadow-sm focus:border-yellow-500 focus: outline-none focus: ring-yellow-500'
                    />
                    {errors.surname && (
                        <p className='mt-1 text-sm text-red-600'>
                            {errors.surname.message}
                        </p>
                    )}
                    <input
                        {...register('firstname')}
                        type='text'
                        placeholder='First name'
                        className='mt-1 block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-yellow-500 focus: outline-none focus: ring-yellow-500'
                    />
                    {errors.firstname && (
                        <p className='mt-1 text-sm text-red-600'>
                            {erros.firstname.message}
                        </p>
                    )}
                    <input
                        {...register('phonenumber')}
                        type='number'
                        placeholder='Phone Number'
                        className='mt-1 block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-yellow-500 focus: outline-none focus: ring-yellow-500'
                    />
                    {errors.phonenumber && (
                        <p className='text-sm mt-1 text-red-600'>
                            {errors.phonenumber.message}
                        </p>
                    )}
                    <input
                        {...register('email')}
                        type='email'
                        placeholder='Email'
                        className='mt-1 block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-yellow-500 focus: outline-none focus: ring-yellow-500'
                    />
                    {errors.email && (
                        <p className='text-sm mt-1 text-red-500'>
                            {errors.email.message}
                        </p>
                    )}
                    <button
                        onClick={handleSave}
                        className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Save
                    </button>
                </form>
                </div>
                
            </div>
        </div>
    )
};