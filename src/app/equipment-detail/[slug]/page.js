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
import Image from 'next/image'; // Add this if you're using Next.js Image component

export default function Detail() {
    const params = useParams();
    const [equipment, setEquipment] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (params.slug) {
            try {
                const foundEquipment = cardData.find(item => item.slug === params.slug);
                setEquipment(foundEquipment);
            } catch (error) {
                console.error('Error finding equipment:', error);
            } finally {
                setIsLoading(false);
            }
        }
    }, [params.slug]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!equipment) {
        return <div>Equipment not found</div>;
    }

    // Ensure image URLs are valid
    const mainImage = equipment.image?.startsWith('/') 
        ? equipment.image 
        : `/${equipment.image}`; // Add leading slash if missing

    const { price, title, description, availability, slug } = equipment;

    // Ensure related item images are valid URLs
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
                mainImage={mainImage} 
                thumbnails={[mainImage, mainImage]} // Use the validated mainImage
                width={500} 
                height={500} 
                price={price} 
                negotiable={true} 
            />
            <div className="grid grid-cols-3 gap-8 mt-8 rounded-lg shadow p-4">
                <div className="col-span-2">
                    <EquipmentInfo 
                        title={title} 
                        location="Port Harcourt, Rumuola" 
                        brand="Some Brand" 
                        color="Yellow" 
                        year="2022" 
                    />
                    <Description description={description} />
                </div>
               
            </div>
            <RelatedItem items={relatedItems} />
        </Layout>
    );
}