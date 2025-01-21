import Layout from "@/components/details/Layout";
import SavedEquipmentComponent from "@/components/details/SavedEquipmentComponent";

export const metadata = {
  title: 'Equiments.ng | Saved Equipments',
  description: 'Saved Equipments',
}

export default function SavedEquipment ({}) {
    const image = '/future.jpeg';
    const savedItems = [
        {
          id: 1,
          image: '/future.jpeg',
          title: 'Item 1',
          location: 'Location 1',
          cost: 5000,
          description: 'This is a description for Item 1. It provides details about the item, its features, and usage.',
        },
        {
          id: 2,
          image: '/future.jpeg',
          title: 'Item 2',
          location: 'Location 2',
          cost: 10000,
          description: 'This is a description for Item 2. It provides details about the item, its features, and usage.',
        },
        {
          id: 3,
          image: '/future.jpeg',
          title: 'Item 3',
          location: 'Location 3',
          cost: 7500,
          description: 'This is a description for Item 3. It provides details about the item, its features, and usage.',
        },
        {
          id: 4,
          image: '/future.jpeg',
          title: 'Item 4',
          location: 'Location 4',
          cost: 12000,
          description: 'This is a description for Item 4. It provides details about the item, its features, and usage.',
        },
        {
          id: 5,
          image: '/future.jpeg',
          title: 'Item 5',
          location: 'Location 5',
          cost: 8500,
          description: 'This is a description for Item 5. It provides details about the item, its features, and usage.',
        },
      ];

    return (
        <div className="bg-gray-100">
            <Layout>
                <SavedEquipmentComponent savedItems={savedItems} />
            </Layout>
        </div>
    )

}