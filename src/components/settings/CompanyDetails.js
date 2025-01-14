
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
                        {...register('surname')}
                        type='text'
                        placeholder='Surname'
                        className='mt-1 block w-full rounded-md border border-gray-600 px-3 py-2 shadow-sm focus:border-yellow-500 focus: outline-none focus: ring-yellow-500'
                    />
                    {errors.surname && (
                        <p className='mt-1 text-sm text-red-600'>
                            {errors.surname.message}
                        </p>
                    )}
                    <input
                        {...register('firstname')}
                        type='text'
                        placeholder='First name'
                        className='mt-1 block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-yellow-500 focus: outline-none focus: ring-yellow-500'
                    />
                    {errors.firstname && (
                        <p className='mt-1 text-sm text-red-600'>
                            {erros.firstname.message}
                        </p>
                    )}
                    <input
                        {...register('phonenumber')}
                        type='number'
                        placeholder='Phone Number'
                        className='mt-1 block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-yellow-500 focus: outline-none focus: ring-yellow-500'
                    />
                    {errors.phonenumber && (
                        <p className='text-sm mt-1 text-red-600'>
                            {errors.phonenumber.message}
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