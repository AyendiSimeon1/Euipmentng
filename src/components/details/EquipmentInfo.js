
export default function EquipmentInfo ({ equipment }) {
    return (
        <div>
       
            <div className="flex">
                <div>
                    <p className=""><strong>Make </strong></p>
                    <p>Auto Bold</p> 
                </div>
             
                <div className="pl-8">
                    <p ><strong>Model</strong></p>
                    <p>{equipment.model} </p>
                </div>
                <div className="pl-8">
                    <p><strong>Location</strong></p>
                <p className="text-sm text-gray-600">{equipment.location} </p>
                </div>
                <div className="pl-8"> 
                    <p ><strong>Working Condition </strong> </p>
                    <p>{equipment.workingcondition ? 'New' : 'Used'}</p>
                </div>
                
            </div>
        </div>
    )
}