import Image from "next/image";
import PriceInfo from "./PriceInfo";

export default function ImageGallery ({ equipment, thumbnails, width, height, price, negotiable }) {
    if (!equipment) {
        return <div>Loading equipment details...</div>;
    }
    return (
        <div className="flex">
            <div className="w-3/4">
                <Image src={equipment.coverimage} alt="Main Image" className="w-full rounded-lg shadow" width={width} height={height}/>
                
            </div>
            <div className="w-1/4 pl-4 flex flex-col space-y-2">
                {equipment.thumbnails.map((thumb, index)=> (
                    <Image key={index} src={thumb} alt={`Thumbnail ${index}`} className="rounded-lg shadow w-full" width={width} height={height} />
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