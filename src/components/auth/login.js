"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schema/loginSchema';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
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
            Welcome to Equipment.ng
          </h2>
          <p className='font-medium text-2xl text-center text-gray-600 mt-4'>Login to Equipment.ng</p>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-[#2A2F38]"
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
                    placeholder="Password"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-[#2A2F38]"
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

              <div className="flex justify-between">
                <div className="flex items-center px-2">
                <input
                  {...register('terms')}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-white checked:border-red-500 checked:bg-red-50"
                />
                  <p className="px-2 font-medium text-slate">Remember me</p>
                </div>
                <div>
                  <a href="/" className="text-[#2A2F38] font-bold">
                    Forgot Password?
                  </a>
                </div>
              </div>
              {errors.terms && (
                <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#2A2F38] hover:bg-[#2A2F38] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
              >
                {isLoading ? 'Signing in...' : 'Login'}
              </button>

             

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
            </form>
          </div>
          <div>
            <p className='text-center mt-4 text-[#2A2F38]'>Don't have an account? <a href='/' className='text-[#2A2F38] font-bold'>Create an account</a></p>
          </div>
        </div>
      </div>
    );
}
