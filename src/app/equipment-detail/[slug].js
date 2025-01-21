"use client";
import { useRouter } from 'next/router';
import Layout from '@/components/details/Layout';
import ImageGallery from '@/components/details/ImageGallery';
import EquipmentInfo from '@/components/details/EquipmentInfo';
import Description from '@/components/details/Description';
import PriceInfo from '@/components/details/PriceInfo';
import RelatedItem from '@/components/details/RelatedItems';
import { cardData } from '@/path/to/cardData'; // Adjust import path as needed

export default function Detail() {
    const router = useRouter();
    const { slug: equipmentSlug } = router.query;

    // Find the equipment based on the slug
    const equipment = cardData.find(item => item.slug === equipmentSlug);

    if (!equipment) {
        return <p>Loading...</p>;
    }

    const { image, price, title, description, availability, slug } = equipment;

    // Static related items (you can modify to fetch dynamically if needed)
    const relatedItems = [
        {
            image: '/future.jpeg',
            title: 'Item 1',
            price: '20000'
        },
        {
            image: '/future.jpeg',
            title: 'Item 2',
            price: '4000'
        }
    ];

    return (
        <Layout>
            <ImageGallery 
                mainImage={image} 
                thumbnails={[image, image]} 
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
                <PriceInfo price={price} negotiable={true} />
            </div>
            <RelatedItem items={relatedItems} />
        </Layout>
    );
}
