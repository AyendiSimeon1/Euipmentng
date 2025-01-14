
import { useForm } from 'react-hook-form';

export default function CompanyDetails () {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
        <div className="flex-1 p-8">
            <div className='bg-white px-3 py-1 rounded-lg'>
                <h1 className="text-2xl font-semibold mb-8">Change Email</h1>
            </div>
            <div className='max-w-2xl'>
            <form className="space-y-4">
                    <input
                        {...register('email')}
                        type='text'
                        placeholder='Email'
                        className='mt-2 block w-full rounded-md border border-gray-600 px-3 py-2 shadow-sm focus:border-yellow-500 focus: outline-none focus: ring-yellow-500'
                    />
                    {errors.name && (
                        <p className='mt-2 text-sm text-red-600'>
                            {errors.name.message}
                        </p>
                    )}
                    
                    <button
                       
                        className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Change
                    </button>
                </form>
            </div>
            

        </div>
    )
}