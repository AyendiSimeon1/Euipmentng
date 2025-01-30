// app/equipment-detail/[slug]/page.js
"use client";

import { useParams } from 'next/navigation';
import Layout from '@/components/details/Layout';
import ImageGallery from '@/components/details/ImageGallery';
import EquipmentInfo from '@/components/details/EquipmentInfo';
import Description from '@/components/details/Description';
import PriceInfo from '@/components/details/PriceInfo';
import RelatedItem from '@/components/details/RelatedItems';
import { cardData } from '@/components/ui/cards/HomepageCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image'; 
import { fetchEquipmentById } from '@/redux/reducers/equipmentReducer';

export default function Detail() {
    const params = useParams();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const { selectedEquipment: equipment, error } = useSelector(state => state.equipments);
    console.log('The equipment', equipment);
    console.log('The parma;s', params)

    useEffect(() => {
        const fetchEquipment = async () => {
            const id = params?.slug;
            console.log('the params is this', id)
        if(!id) {
            console.error('No equipment id was foind');
            return;
        }   
        if (id) {

            try {
                setIsLoading(true);
                const result = await dispatch(fetchEquipmentById(id)).unwrap();
                console.log('Dispatch result:', result);
            } catch (error) {
                console.error('Error finding equipment:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };
    
        fetchEquipment();
    
    }, [dispatch, params?.slug]);
    if (error) {
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full">
              <div className="flex items-center space-x-3">
                <svg
                  className="h-6 w-6 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <h3 className="text-lg font-medium text-red-800">Error Loading Equipment</h3>
              </div>
              
              <p className="mt-2 text-sm text-red-700">
                {error?.message || 'Something went wrong. Please try again.'}
              </p>
              
              <button
                onClick={() => window.location.reload()}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Try Again
              </button>
            </div>
          </div>
        );
      }
    if (isLoading) {
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2A2F38]"></div>
            <p className="mt-4 text-gray-600 text-sm">Loading equipment details...</p>
          </div>
        );
      }
      
      // Not found state
      if (!equipment) {
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="bg-gray-100 rounded-lg p-8 max-w-md w-full text-center">
              <svg 
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Equipment not found</h3>
              <p className="mt-2 text-sm text-gray-500">We couldn't find the equipment you're looking for.</p>
            </div>
          </div>
        );
      }



    const relatedItems = [
        {
            image: '/future.jpeg', // Ensure this path exists in your public folder
            title: 'Item 1',
            price: '20000'
        },
        {
            image: '/future.jpeg', // Ensure this path exists in your public folder
            title: 'Item 2',
            price: '4000'
        }
    ];

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ImageGallery 
                equipment={equipment} 
                // thumbnails={[mainImage, mainImage]} // Use the validated mainImage
                width={500} 
                height={500} 
                price={equipment.price} 
                negotiable={true} 
            />

            
            <div className="mt-8">
                <RelatedItem items={relatedItems} />
            </div>
            </div>
        </Layout>
    );
}