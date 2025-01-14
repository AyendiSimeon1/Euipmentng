import Card from '@/components/ui/cards/HomepageCard'
import { SearchIcon } from 'lucide-react'
export default function Hero() {
    return (
        <div>
            <div className="flex items-center justify-center bg-gray-900  ">
                <div className="px-6 py-10 mx-3 max-w-4xl text-center">
                    <p className="text-3xl font-bold text-white mb-6">Hire all types of equipments</p>
                    <div className="relative ">
                    <input 
                            type="text" 
                            placeholder="Search Equipments" 
                            className="p-3 m-3 rounded border border-gray-300 w-full md:w-auto"
                        />
                        <button className='absolute left-3 top-1/2' >
                            <SearchIcon  />
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                        
                        <select className="p-3 rounded border border-gray-300 w-full md:w-auto">
                            <option value="">Location</option>
                            <option value="new-york">New York</option>
                            <option value="los-angeles">Los Angeles</option>
                            <option value="chicago">Chicago</option>
                        </select>
                        <select className="p-3 rounded border border-gray-300 w-full md:w-auto">
                            <option value="">Price</option>
                            <option value="low-to-high">Low to High</option>
                            <option value="industrial">Industrial</option>
                        </select>
                        <select className="ml-2 p-2 rounded border border-gray-300">
                            <option value="">Category</option>
                            <option value="new-york">New York</option>
                            <option value="los-angeles">Los Angeles</option>
                            <option value="chicago">Chicago</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-8 mx-8 mb-8 px-8 py-8 border bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow bg-cover bg-center" style={{ backgroundImage: "url('future.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="bg-black bg-opacity-70 p-6 rounded-lg">
                    <h2 className="font-bold text-3xl text-white">List your Items on Equipments.ng</h2>
                    <p className="text-white pt-2">Easy to follow steps to list a wide range of construction, agricultural and industrial equipments. <br />Rent from verified lessors with ease.</p>
                    <button className="mt-3 text-white bg-yellow-500 font-medium px-4 py-2 rounded-full">List an equipment</button>
                </div>
            </div>
            
                <Card />
       
        </div>
    )
}