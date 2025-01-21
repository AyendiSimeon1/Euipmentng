"use client";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { signUpSchema } from "@/schema/signupSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "@/redux/reducers/authReducers";

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = (data) => {
        dispatch(signUpUser(data));
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                    Welcome to Equipment.ng
                </h2>
                <p className=" text-center text-xl mt-2">Sign up</p>
            </div>

            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            
                            <input 
                                {...register('surname')}
                                type="text"  
                                className="mt-1 block w-full border rounded-md border-gray-300 px-3 py-1 shadow-sm focus:border-[#2A2F38]  focus:outline-none focus:ring-yellow-500"
                                placeholder="Surname"
                                />
                                {errors.surname && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.surname.message}
                                    </p>
                                )}
                        </div>
                      
                           
                            <input 
                                {...register('name')}
                                type="text"
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 font:border-yellow-500 focus: outline-none focus: ring-yellow-500"
                                placeholder="Name"
                            />
                            {/* {errors.name & (
                                <p className="mt-1 text-sm font-medium text-gray-700">{errors.name.message}</p> 
                            )} */}
                         <div>
             
              <input
                {...register('email')}
                type="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-[#2A2F38]  focus:outline-none focus:ring-yellow-500"
                placeholder="Email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
      
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-[#2A2F38]  focus:outline-none focus:ring-yellow-500"
                  placeholder="Password"
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
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-[#2A2F38]  focus:outline-none focus:ring-yellow-500"
                  placeholder="Confirm Password"
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

                <div className="flex items-center">
                <input
                    {...register('terms')}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300  px-3 py-1 text-yellow-600 focus:ring-yellow-500"
                />
                <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-900"
                >
                    Yes, I understand and agree to Equipment.ng <span className='font-bold'>Terms of Service</span> , including the
                    
                    <span className='font-bold'> User Agreement and Privacy Policy</span>
               
                </label>
                </div>
                {errors.terms && (
                <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
                )}

                <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-sm rounded-full font-medium text-white bg-[#2A2F38]  hover:bg-[#2A2F38] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
                >
                {isLoading ? 'Signing up...' : 'Sign Up to Equipment.ng'}
                </button>

                <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                        Or continue with
                    </span>
                    </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <FaApple className="mr-2" />
                  <span>Sign up with Apple</span>
                </button>
                
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center py-2 px-3 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <FcGoogle className="mr-2" />
                  <span>Sign up with Google</span>
                </button>
              </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       
    )
}