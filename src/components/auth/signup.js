"use client";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { signUpSchema } from "@/schema/signupSchema";


export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signUpSchema),
    });

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
                    Welcome to Equipment.ng
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label
                                htmlFor="surname"
                                className="block text-sm font-meduim text-gray-700"
                            >
                                Surname 
                            </label>
                            <input 
                                {...register('surname')}
                                type="text"
                                className="mt-1 block w-full border rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                                />
                                {errors.surname && (
                                    <p className="mt-1 text-sm text-red-600">
                                        {errors.surname.message}
                                    </p>
                                )}
                        </div>
                      
                            <label 
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                            </label>
                            <input 
                                {...register('name')}
                                type="text"
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 font:border-yellow-500 focus: outline-none focus: ring-yellow-500"
                            />
                            {errors.name & (
                                <p className="mt-1 text-sm font-medium text-gray-700">{errors.name.message}</p> 
                            )}
                         <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  {...register('password')}
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
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  {...register('confirmPassword')}
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

                <div className="flex items-center">
                <input
                    {...register('terms')}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                />
                <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-900"
                >
                    I understand and agree to Equipment.ng{' '}
                    <a href="/terms" className="text-yellow-600 hover:text-yellow-500">
                    Terms of Service
                    </a>
                    , including the{' '}
                    <a
                    href="/user-agreement"
                    className="text-yellow-600 hover:text-yellow-500"
                    >
                    User Agreement
                    </a>{' '}
                    and{' '}
                    <a
                    href="/privacy"
                    className="text-yellow-600 hover:text-yellow-500"
                    >
                    Privacy Policy
                    </a>
                    .
                </label>
                </div>
                {errors.terms && (
                <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
                )}

                <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
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

                <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                    <span className="sr-only">Sign up with Apple</span>
                    <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-.235.544-.537 1.037-.897 1.474-.451.553-.957.992-1.508 1.316-.657.386-1.293.577-1.91.577-.489 0-.977-.092-1.461-.278-.482-.186-.935-.452-1.359-.796-.425-.345-.794-.753-1.107-1.225-.314-.47-.557-.982-.728-1.534-.171-.552-.257-1.129-.257-1.728 0-.597.086-1.174.257-1.726.171-.552.414-1.064.728-1.535.313-.47.682-.879 1.107-1.224.424-.345.877-.611 1.359-.797.484-.186.972-.278 1.461-.278.617 0 1.253.19 1.91.577.551.324 1.057.763 1.508 1.316.36.437.662.93.897 1.474.236.542.354 1.121.354 1.737 0 .616-.118 1.195-.354 1.737zm-3.445-12.827c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 18c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8z" />
                    </svg>
                    </button>

                    <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                    <span className="sr-only">Sign up with Google</span>
                    <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                    </svg>
                    </button>
                </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       
    )
}