import Image from "next/image";
import PriceInfo from "./PriceInfo";
import EquipmentInfo from "./EquipmentInfo";

export default function ImageGallery ({ equipment, thumbnails, width, height, price, negotiable }) {
    if (!equipment) {
        return <div>Loading equipment details...</div>;
    }
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/4">
                <Image src={equipment.coverimage} alt="Main Image" className="w-full rounded-lg shadow" width={width} height={height}/>
                <EquipmentInfo equipment={equipment}
                    />
                
            </div>
            <div className="w-full md:w-1/4 mt-4 md:mt-0 md:pl-4 flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-x-visible">
                {equipment.thumbnails.map((thumb, index)=> (
                    <Image key={index} src={thumb} alt={`Thumbnail ${index}`} className="rounded-lg shadow w-24 md:w-full flex-shrink-0" width={width} height={height} />
                ) )}

                <PriceInfo 
                    // price={equipment.amount}
                    // negotiable={equipment.negotiable}
                    // ownerName={equipment.owner.name}
                    // location={equipment.location}
                    // phone={equipment.owner.phonenumber}
                    // email={equipment.owner.email}
                />
            </div>  
        </div>
    );
};