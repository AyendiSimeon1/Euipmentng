"use client";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '@/redux/reducers/authReducers';
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';
import { signUpSchema } from "@/schema/signupSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const { loading, error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const password = watch('password');

  const onSubmit = async (data) => {
    const { ...signupData } = data;
    
    try {
      const resultAction = await dispatch(signUpUser(signupData));
      
      // Handle rejected action
      if (signUpUser.rejected.match(resultAction)) {
        const errorMessage = resultAction.payload?.message || 'Signup failed';
        toast.error(errorMessage);
        return;
      }

      // Handle successful signup
      if (signUpUser.fulfilled.match(resultAction)) {
        toast.success(resultAction.payload.message);
        navigate.push('/verify-otp', { state: { email: data.email }});
      }
    } catch (err) {
      // Log error for debugging
      console.error('Signup error:', err);
      
      // Extract error message from various possible formats
      const errorMessage = 
        err.response?.data?.message || 
        err.message || 
        'An error occurred during signup';
      
      toast.error(errorMessage);
    }
  };

  return (
    
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Welcome to Equipment.ng
        </h2>
        <p className="text-center text-xl mt-2">Sign up</p>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                {...register('surname', { required: 'Surname is required' })}
                type="text"
                className="mt-1 block w-full border rounded-md border-gray-300 px-3 py-1 shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-yellow-500"
                placeholder="Surname"
              />
              {errors.surname && (
                <p className="mt-1 text-sm text-red-600">{errors.surname.message}</p>
              )}
            </div>

            <div>
              <input
                {...register('firstname', { required: 'First name is required' })}
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-yellow-500"
                placeholder="First Name"
              />
              {errors.firstname && (
                <p className="mt-1 text-sm text-red-600">{errors.firstname.message}</p>
              )}
            </div>

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
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-yellow-500"
                placeholder="Email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <input
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                  type={showPassword ? 'text' : 'password'}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-yellow-500"
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
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div>
              <div className="relative">
                <input
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: value => value === password || 'Passwords do not match'
                  })}
                  type={showConfirmPassword ? 'text' : 'password'}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-yellow-500"
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
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                {...register('terms', { required: 'You must accept the terms' })}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Yes, I understand and agree to Equipment.ng <span className="font-bold">Terms of Service</span>, including the
                <span className="font-bold"> User Agreement and Privacy Policy</span>
              </label>
            </div>
            {errors.terms && (
              <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3 px-5 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#2A2F38] hover:bg-[#2A2F38] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
            >
              {loading ? 'Signing up...' : 'Sign Up to Equipment.ng'}
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
  );
};

export default Signup;