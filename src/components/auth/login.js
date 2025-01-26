"use client";

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/redux/reducers/authReducers';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    console.log('Authentication status:', isAuthenticated);
  }, [isAuthenticated]);

  const saveUserData = (userData) => {
    localStorage.setItem('token', userData.token);
    console.log('The user token:', userData.token);
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
 
  const onSubmit = async (data) => {
    try {
      const resultAction = await dispatch(loginUser(data));
      if (loginUser.fulfilled.match(resultAction)) {
        saveUserData(resultAction.payload);
        toast.success(resultAction.payload.message);
        router.push('/settings');
      }
      if (loginUser.rejected.match(resultAction)) {
        const errorMessage = resultAction.payload?.message || 'Login failed';
        toast.error(errorMessage);
      }
    } catch (err) {
      toast.error(error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
    <div className="w-full sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
        Welcome to Equipment.ng
      </h2>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        className="!font-sans"
      />
      <p className="text-center text-lg sm:text-xl mt-2">Login</p>
    </div>

    <div className="mt-4 sm:mt-2 w-full sm:mx-auto sm:max-w-md">
      <div className="bg-white py-6 px-4 sm:py-8 sm:rounded-lg sm:px-10">
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2.5 sm:py-1.5 text-base sm:text-sm shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-yellow-500"
              placeholder="Email"
            />
            {errors.email && (
              <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

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
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2.5 sm:py-1.5 text-base sm:text-sm shadow-sm focus:border-[#2A2F38] focus:outline-none focus:ring-yellow-500"
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 sm:h-4 sm:w-4 text-gray-500" />
              ) : (
                <Eye className="h-5 w-5 sm:h-4 sm:w-4 text-gray-500" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.password.message}</p>
          )}

          <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center">
              <input
                {...register('remember')}
                type="checkbox"
                className="h-5 w-5 sm:h-4 sm:w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-[#2A2F38] hover:text-gray-700"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3.5 sm:py-3 px-5 border border-transparent rounded-full shadow-sm text-base sm:text-sm font-medium text-white bg-[#2A2F38] hover:bg-[#2A2F38] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup" className="font-medium text-[#2A2F38] hover:text-gray-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default Login;