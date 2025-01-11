
export default function FormCheckbox ({ label, name, register }) {
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        {...register(name)}
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <label className="ml-2 block text-sm text-gray-700">
        {label}
      </label>
    </div>
  };