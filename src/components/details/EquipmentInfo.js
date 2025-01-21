
export default function EquipmentInfo ({ title, location, brand, color, year }) {
    return (
        <div>
            
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm text-gray-600">{location} </p>
            <div className="flex">
                <div>
                    <p className=""><strong>Make </strong></p>
                    <p>{location}</p> 
                </div>
                <div className="pl-8">
                    <p ><strong>Brand </strong></p>
                    <p>{brand} </p>
                </div>
                <div className="pl-8">
                    <p ><strong>Color</strong></p>
                    <p>{color} </p>
                </div>
                <div className="pl-8"> 
                    <p ><strong>Year of Manufacture </strong> </p>
                    <p>{year}</p>
                </div>
                
            </div>
        </div>
    )
}