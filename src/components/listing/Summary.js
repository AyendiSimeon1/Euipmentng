import React, { useState } from 'react';

const ListingSummary = ({
  images,
  title,
  location,
  cost,
  description,
  make,
  brand,
  yearOfManufacture,
  accessories = [],
  certificates = [],
  isUsed = false,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
     
      <div className="space-y-4">
     
        <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={images[selectedImage]}
            alt={`${title} - View ${selectedImage + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        
     
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-video rounded-lg overflow-hidden ${
                selectedImage === index ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <img
                src={image}
                alt={`${title} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
      
        <div>
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-600">{location}</p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Make</p>
            <p className="font-medium">{make}</p>
          </div>
          <div>
            <p className="text-gray-600">Brand</p>
            <p className="font-medium">{brand}</p>
          </div>
          <div>
            <p className="text-gray-600">Color</p>
            <p className="font-medium">{make}</p>
          </div>
          <div>
            <p className="text-gray-600">Year of Manufacture</p>
            <p className="font-medium">{yearOfManufacture}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Cost</p>
              <div className="flex items-baseline space-x-2">
                <p className="text-2xl font-bold text-gray-900">
                  {cost.toLocaleString()}
                </p>
                <span className="text-sm text-gray-500">negotiable</span>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 space-y-2">
                <span className="text-sm">Pay On Delivery</span>
                <div className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <span className="text-sm">Payment After Usage</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <span className="text-sm">Purchase Order/After few days</span>
              </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h2 className="font-medium">Description</h2>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>

        {/* Accessories */}
        <div className="space-y-2">
          <h2 className="font-medium">Accessories</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {accessories.map((accessory, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-700">{accessory}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Working Condition */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={!isUsed}
            className="h-4 w-4 text-blue-600"
            readOnly
          />
          <span className="text-sm">Brand New</span>
        </div>

       
        <div className="space-y-2">
          <h2 className="font-medium">Certificates</h2>
          <div className="space-y-1">
            {certificates.map((certificate, index) => (
              <p key={index} className="text-sm text-gray-700">
                {certificate}
              </p>
            ))}
          </div>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Download a pdf Copy
          </button>
          {/* <button className="w-full py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
            Go ahead and List
          </button> */}
        </div>
      </div>
  );
};

export default ListingSummary;