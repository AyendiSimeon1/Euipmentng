import { useForm } from 'react-hook-form';

export default function FormInput ({ label, name, register, error, type = "text" }) {
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      {...register(name)}
      type={type}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && <span className="text-red-500 text-sm">{error.message}</span>}
  </div>
};

