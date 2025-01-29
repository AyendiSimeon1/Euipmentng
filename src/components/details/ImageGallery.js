import Image from "next/image";
import PriceInfo from "./PriceInfo";
export default function ImageGallery ({ mainImage, thumbnails, width, height, price, negotiable }) {
    return (
        <div className="flex">
            <div className="w-3/4">
                <Image src={mainImage} alt="Main Image" className="w-full rounded-lg shadow" width={width} height={height}/>
                
            </div>
            <div className="w-1/4 pl-4 flex flex-col space-y-2">
                {thumbnails.map((thumb, index)=> (
                    <Image key={index} src={thumb} alt={`Thumbnail ${index}`} className="rounded-lg shadow w-full" width={width} height={height} />
                ) )}

                <PriceInfo 
                price={500}
                negotiable={true}
                ownerName="Jackson and Family International"
                location="Port Harcourt, Rumuola"
                phone="+2348000000000"
                email="Jacksonandfamily@gmail.com"
                />
            </div>  
        </div>
    );
};