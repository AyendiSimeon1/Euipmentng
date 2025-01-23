"use client";
import { useForm } from "react-hook-form";
import FormInput from "./Form";
import Form from './Form';
import FormSelect from './FormSelect';
import { useState } from "react";
import FormCheckbox from './FormCheckbox';

export default function EquipmentForm  ()  {
    const [step, setStep] = useState(1);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [accessories, setAccessories] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const onSubmit = (data) => {
      console.log(data);
   
    };
  
    const renderStep1 = () => (
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-6">Basic Details</h2>
        <FormInput
          label="Location"
          name="location"
          register={register}
          error={errors.location}
        />
        <FormSelect
          label="Category"
          name="category"
          register={register}
          options={[
            { value: 'electronics', label: 'Electronics' },
            { value: 'machinery', label: 'Machinery' },
          ]}
          error={errors.category}
        />
        <FormSelect
          label="Sub Category"
          name="sub-category"
          register={register}
          options={[
            { value: 'electronics', label: 'Electronics' },
            { value: 'machinery', label: 'Machinery' },
          ]}
          error={errors.category}
        />

        <FormInput
          label="Name of Equipment"
          name="equipmentName"
          register={register}
          error={errors.equipmentName}
        />
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Add Image</h3>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Add atleast 3 images</h3>
          <p className="text-sm font-medium text-gray-700 mb-2">First image is your cover image</p>
          <div className="flex gap-2">
            <button className="p-4 bg-yellow-100 rounded-md">
              <span className="text-2xl">+</span>
            </button>
            <button className="p-4 bg-yellow-100 rounded-md">
              <span className="text-sm">Add Video</span>
            </button>
          </div>
        </div>
      </div>
    );
  
    const renderStep2 = () => {
      
    
      const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
          e.preventDefault();
          setAccessories([...accessories, inputValue.trim()]);
          setInputValue('');
        }
      };
    
      const removeAccessory = (indexToRemove) => {
        setAccessories(accessories.filter((_, index) => index !== indexToRemove));
      };
    
      return (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-6">Equipment Information</h2>
          <FormInput
            label="Name of Equipment"
            name="equipmentName"
            register={register}
            error={errors.equipmentName}
          />
          <FormInput
            label="Description"
            name="description"
            register={register}
            error={errors.description}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Brand"
              name="brand"
              register={register}
              error={errors.brand}
            />
            <FormInput
              label="Model"
              name="model"
              register={register}
              error={errors.model}
            />
          </div>
    
          <div className="flex">

          
          
          <div className="space-y-2  ">
            <label className="block text-sm font-medium text-gray-700">
              Accessories
            </label>
            <div className="flex flex-wrap gap-2 p-2 border rounded-md">
              {accessories.map((accessory, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-gray-100"
                >
                  {accessory}
                  <button
                    type="button"
                    onClick={() => removeAccessory(index)}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type and press Enter to add"
                className="flex-1 outline-none min-w-[200px] p-1"
              />
            </div>
            <p className="text-sm text-gray-500">
              Press Enter to add an accessory
            </p>
          </div>
          <div className=" gap-4 items-center ml-10">
            <p className="text-sm font-medium text-gray-700">Working condition</p>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('condition', { required: 'Please select a condition' })}
                  value="brandNew"
                  className="form-radio h-4 w-4 text-[#2A2F38] focus:ring-[#2A2F38]"
                />
                <span className="ml-2">Brand New</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('condition', { required: 'Please select a condition' })}
                  value="refurbished"
                  className="form-radio h-4 w-4 text-[#2A2F38] focus:ring-[#2A2F38]"
                />
                <span className="ml-2">Refurbished</span>
              </label>
            </div>
          </div>
          {errors.condition && (
            <p className="text-sm text-red-600">{errors.condition.message}</p>
          )}
    
          </div>
        </div>
      );
    };

    const renderStep3 = () => (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-6">Pricing</h2>
        <FormSelect
          label="Price Schedule"
          name="priceSchedule"
          register={register}
          options={[
            { value: 'hourly', label: 'Hourly' },
            { value: 'daily', label: 'Daily' },
            { value: 'weekly', label: 'Weekly' },
          ]}
          error={errors.priceSchedule}
        />
        <FormInput
          label="Price"
          name="price"
          type="number"
          register={register}
          error={errors.price}
        />
        <FormCheckbox
          label="Negotiable"
          name="isNegotiable"
          register={register}
        />
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700">Payment Method</h3>
          <FormCheckbox
            label="Pay On Delivery"
            name="payOnDelivery"
            register={register}
          />
          <FormCheckbox
            label="Payment After Usage"
            name="paymentAfterUsage"
            register={register}
          />
        </div>
      </div>
    );
  
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-8 text-center">List an Equipment</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-gray-800"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-gray-800"
              >
                Complete
              </button>
            )}
          </div>
        </form>
      </div>
    );
  };
  