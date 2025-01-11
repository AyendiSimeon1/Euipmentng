const EquipmentDetails = ({ make, brand, color, yearOfManufacture }) => (
    <div className="grid grid-cols-4 gap-4 text-sm text-gray-600 mt-2">
      <div>
        <div className="font-medium">Make</div>
        <div>{make}</div>
      </div>
      <div>
        <div className="font-medium">Brand</div>
        <div>{brand}</div>
      </div>
      <div>
        <div className="font-medium">Color</div>
        <div>{color}</div>
      </div>
      <div>
        <div className="font-medium">Year of Manufacture</div>
        <div>{yearOfManufacture}</div>
      </div>
    </div>
  );