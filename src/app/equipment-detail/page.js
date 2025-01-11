"use client";
import Layout from '@/components/details/Layout'
import ImageGallery from '@/components/details/ImageGallery'
import EquipmentInfo from '@/components/details/EquipmentInfo'
import Description from '@/components/details/Description'
import PriceInfo from '@/components/details/PriceInfo'
import RelatedItem from '@/components/details/RelatedItems'

export default function Detail () {
    const mainImage = '/future.jpeg';
    const thumbnails = ['/future.jpeg', '/future.jpeg'];
    const RelatedItems = [
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
      <ImageGallery mainImage={mainImage} thumbnails={thumbnails} width={500} height={500} price={20000000} negotiable={true}/>
      <div className="grid grid-cols-3 gap-8 mt-8 rounded-lg shadow p-4">
        <div className="col-span-2">
          <EquipmentInfo title="Steel Pipelines Cables" location="Port Harcourt, Rumuola" brand="Some Brand" color="Yellow" year="2022" />
          <Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus." />
        </div>
        {/* <PriceInfo price={20000000} negotiable={true} /> */}
      </div>
      <RelatedItem items={RelatedItems} />
    </Layout>
    )
}