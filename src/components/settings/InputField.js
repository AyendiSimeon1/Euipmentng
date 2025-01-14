export default function InputField ({ placeholder,  type = 'text', value}) {
    <div className="mb-4">
       <h1>Hllo</h1>
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus: ring-blue-500 focus:border-transparent" 
        />
    </div>
}