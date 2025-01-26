import Card from '@/components/ui/cards/HomepageCard';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import EquipmentRequests from '@/components/ui/cards/EquipmentRequest';

export default function Hero() {
    return (
        <div>
            <div className="flex justify-center bg-gray-900">
                <div className="px-4 py-8 mx-2 max-w-7xl w-full">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
                        Hire all types of equipments
                    </h1>
                    <div className="flex justify-center mb-4">
                        <div className="flex w-full max-w-md items-center bg-white rounded-full shadow-md">
                            <input
                                type="text"
                                placeholder="Search Equipments"
                                className="w-full px-4 py-2 rounded-l-full text-gray-800 focus:outline-none"
                            />
                            <button className="px-4 py-2 text-gray-800">
                                <SearchIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <select className="bg-white px-4 py-3 rounded-lg w-full sm:w-auto focus:outline-none  text-gray-800 shadow-sm hover:border-gray-400">
                            <option value="">Filter By:</option>
                            <option value="new-york">New York</option>
                            <option value="los-angeles">Los Angeles</option>
                            <option value="chicago">Chicago</option>
                        </select>
                        <div className="flex flex-col sm:flex-row items-center bg-white px-3 py-2 rounded-lg w-full sm:w-auto">
                            <select className="p-3 rounded bg-white w-full sm:w-auto focus:outline-none  text-gray-800 shadow-sm hover:border-gray-400">
                                <option value="">Location</option>
                                <option value="new-york">New York</option>
                                <option value="los-angeles">Los Angeles</option>
                                <option value="chicago">Chicago</option>
                            </select>
                            <select className="mt-2 sm:mt-0 sm:ml-2 p-3 rounded bg-white w-full sm:w-auto focus:outline-none  text-gray-800 shadow-sm hover:border-gray-400">
                                <option value="">Price</option>
                                <option value="low-to-high">Low to High</option>
                                <option value="industrial">Industrial</option>
                            </select>
                            <select className="mt-2 sm:mt-0 sm:ml-2 p-3 rounded bg-white w-full sm:w-auto focus:outline-none  text-gray-800 shadow-sm hover:border-gray-400">
                                <option value="">Category</option>
                                <option value="construction">Construction</option>
                                <option value="agriculture">Agriculture</option>
                                <option value="industrial">Industrial</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 sm:p-6">
                <div
                    className="mt-12 mx-4 sm:mx-12 mb-8 border bg-gradient-to-r from-gray-900 via-gray-800 to-gray-500 rounded-lg shadow bg-cover bg-center space-y-4"
                    style={{ backgroundImage: "url('future.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="bg-black bg-opacity-90 p-6 rounded-lg min-h-[300px]">
                        <h2 className="font-bold text-3xl sm:text-4xl text-white mx-4 sm:mx-8 mt-4 sm:mt-6">
                            List your Items on Equipments.ng
                        </h2>
                        <p className="text-white pt-4 mx-4 sm:mx-8 mt-2 sm:mt-4 text-lg">
                            Easy to follow steps to list a wide range of construction, agricultural and industrial equipments. <br />
                            Rent from verified lessors with ease.
                        </p>
                        <Link href="/list-equipment">
                        <button className="mx-4 sm:mx-8 mt-4 text-white bg-[#2A2F38] font-medium px-6 py-3 text-lg rounded-full">
                            List an equipment
                        </button>
                        </Link>
                    </div>
                </div>
                <Card />
                <EquipmentRequests />
            </div>
        </div>
    );
};
