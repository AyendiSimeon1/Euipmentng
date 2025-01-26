"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEquipmentById } from '@/redux/reducers/equipmentReducer';
import Layout from '@/components/details/Layout';
import ImageGallery from '@/components/details/ImageGallery';
import EquipmentInfo from '@/components/details/EquipmentInfo';
import Description from '@/components/details/Description';
import PriceInfo from '@/components/details/PriceInfo';
import RelatedItem from '@/components/details/RelatedItems';

export default function Detail() {
    const params = useParams();
    const dispatch = useDispatch();
    const { selectedEquipment, loading, error } = useSelector(state => state.equipments);

    useEffect(() => {
        if (params.id) {
            dispatch(fetchEquipmentById(params.id));
        }
    }, [dispatch, params.id]);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>;
    }

    if (error) {
        return <div className="flex justify-center items-center min-h-screen text-red-500">
            {error}
        </div>;
    }

    if (!selectedEquipment) {
        return <div className="flex justify-center items-center min-h-screen">
            Equipment not found
        </div>;
    }

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="w-full">
                        <ImageGallery images={selectedEquipment.images} />
                    </div>
                    
                    <div className="space-y-6">
                        <EquipmentInfo 
                            name={selectedEquipment.name}
                            category={selectedEquipment.category}
                            condition={selectedEquipment.condition}
                        />
                        
                        <PriceInfo 
                            price={selectedEquipment.price}
                            rentPeriod={selectedEquipment.rentPeriod}
                        />
                        
                        <Description description={selectedEquipment.description} />
                    </div>
                </div>

                <div className="mt-12">
                    <RelatedItem 
                        category={selectedEquipment.category}
                        currentId={selectedEquipment._id}
                    />
                </div>
            </div>
        </Layout>
    );
}