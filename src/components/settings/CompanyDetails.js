
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
                <h1 className="text-2xl font-semibold mb-8">Company Details</h1>
            </div>
            <div className='max-w-2xl'>
            <form className="space-y-4">
                    <input
                        {...register('name')}
                        type='text'
                        placeholder='Name of Company'
                        className='mt-2 block w-full rounded-md border border-gray-600 px-3 py-2 shadow-sm focus:border-yellow-500 focus: outline-none focus: ring-yellow-500'
                    />
                    {errors.name && (
                        <p className='mt-2 text-sm text-red-600'>
                            {errors.name.message}
                        </p>
                    )}
                    <input
                        {...register('address')}
                        type='text'
                        placeholder='Address'
                        className='mt-2 block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-yellow-500 focus: outline-none focus: ring-yellow-500'
                    />
                    {errors.address && (
                        <p className='mt-1 text-sm text-red-600'>
                            {erros.address.message}
                        </p>
                    )}
                    <input
                        {...register('email')}
                        type='email'
                        placeholder='Email'
                        className='mt-1 block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-yellow-500 focus: outline-none focus: ring-yellow-500'
                    />
                    {errors.email && (
                        <p className='text-sm mt-1 text-red-500'>
                            {errors.email.message}
                        </p>
                    )}
                    <input
                        {...register('website')}
                        type='text'
                        placeholder='Website'
                        className='mt-1 block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-yellow-500 focus: outline-none focus: ring-yellow-500'
                    />
                    {errors.website && (
                        <p className='text-sm mt-1 text-red-600'>
                            {errors.website.message}
                        </p>
                    )}
                    
                    <button
                       
                        className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Save
                    </button>
                </form>
            </div>
            

        </div>
    )
}