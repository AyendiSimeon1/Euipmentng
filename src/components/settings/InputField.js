export default function InputField ({ label, name, type = 'text', value, onChange }) {
    <div className="mb-4">
        <label className="block text-sm text-gray-700 font-medium mb-1">
            {label}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus: ring-blue-500 focus:border-transparent" 
        />
    </div>
}