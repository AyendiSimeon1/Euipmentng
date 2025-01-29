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
    if (error) return <div>Error: {error}</div>;
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (!equipment) return <div>Equipment not found</div>;



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
            <ImageGallery 
                equipment={equipment} 
                // thumbnails={[mainImage, mainImage]} // Use the validated mainImage
                width={500} 
                height={500} 
                price={equipment.price} 
                negotiable={true} 
            />
            <div className="grid grid-cols-3 gap-8 mt-8 rounded-lg shadow p-4">
                <div className="col-span-2">
                    <EquipmentInfo equipment={equipment}
                    />
                    <Description equipment={equipment} />
                </div>
               
            </div>
            <RelatedItem items={relatedItems} />
        </Layout>
    );
}