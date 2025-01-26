"use client";
import { useForm } from "react-hook-form";
import FormInput from "./Form";
import Form from './Form';
import FormSelect from './FormSelect';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"
import { addEquipment } from "@/redux/reducers/equipmentReducer";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormCheckbox from './FormCheckbox';
import { Loader2 } from 'lucide-react';

export default function EquipmentForm  ()  {
    const [step, setStep] = useState(1);
    // const [loading, setLoading] = useState(false);
    const [accessories, setAccessories] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();
    const [images, setImages] = useState([]);
    const [video, setVideo] = useState(null);
    const [previewImages, setPreviewImages] = useState([]);

    const { loading } = useSelector((state) => state.equipment || {});
  

    const {
      register,
      handleSubmit,
      formState: { errors },
      watch // Add watch to get form values
    } = useForm();

    useEffect(() => {
      const token = localStorage.getItem('token');

      if (!token) {
        // Redirect to login page if no token
        router.push('/login');
        toast.error('Please log in to add equipment');
      }
    }, [router]);
  
    const handleImageUpload = (e) => {
      const files = Array.from(e.target.files);
    
    
    const validFiles = files.filter(file => {
      const isValid = file.type.startsWith('image/');
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB limit
      
      if (!isValid) toast.error('Please upload only image files');
      if (!isValidSize) toast.error('Image size should be less than 5MB');
      
      return isValid && isValidSize;
    });

    if (validFiles.length === 0) return;

    setImages(validFiles);
      
      const previews = files.map(file => URL.createObjectURL(file));
      setPreviewImages(previews);
    };
  
    const handleVideoUpload = (e) => {
      const file = e.target.files[0];
    
    if (file) {
      const isValid = file.type.startsWith('video/');
      const isValidSize = file.size <= 50 * 1024 * 1024; // 50MB limit
      
      if (!isValid) {
        toast.error('Please upload a valid video file');
        return;
      }
      if (!isValidSize) {
        toast.error('Video size should be less than 50MB');
        return;
      }
      
      setVideo(file);
    }
  };
  
  
  // const onSubmit = async (data) => {
  //   try {
  //     // Log all form values
  //     console.log('Form Data:', data);
  //     console.log('Images:', images);
  //     console.log('Video:', video);
  //     console.log('Accessories:', accessories);

  //     // Create FormData for file uploads
  //     const formData = new FormData();
      
  //     // Append all form payload
  //     Object.keys(data).forEach(key => {
  //       // Special handling for accessories
  //       if (key === 'accessories') {
  //         formData.append(key, JSON.stringify(accessories));
  //       } else {
  //         formData.append(key, data[key]);
  //       }
  //     });

  //     // Append files if they exist
  //     if (images.length > 0) {
  //       images.forEach((image, index) => {
  //         formData.append('images', image);
  //       });
  //     }

  //     if (video) {
  //       formData.append('video', video);
  //     }

  //     console.log('The complete FormData:', Object.fromEntries(formData));
      
  //     const resultAction = await dispatch(addEquipment(formData));

  //     if (resultAction.type === addEquipment.fulfilled.type) {
  //       toast.success(resultAction.payload.message);
  //       router.push('/dashboard');
  //     } else {
  //       const errorMessage = resultAction.payload?.message || 'Failed to add equipment';
  //       toast.error(errorMessage);
  //     }
  //   } catch (error) {
  //     console.error('Equipment creation error:', error);
  //     toast.error(error.response?.data?.message || 'An error occurred');
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      // Create single FormData instance
      const formData = new FormData();
  
      // Add all required fields with defaults and type conversion
      const fields = {
        location: data.location?.trim() || 'Default Location',
        category: data.category?.trim() || 'construction',
        subcategory: data.subcategory?.trim() || 'general',
        name: data.name?.trim() || 'Unnamed Equipment',
        description: data.description?.trim() || 'No description provided',
        brand: data.brand?.trim() || 'Unknown Brand',
        model: data.model?.trim() || 'Generic Model',
        workingcondition: String(data.condition === 'brandNew'),
        pricingschedule: data.priceSchedule?.trim() || 'hourly',
        amount: String(data.amount || '0'),
        negotiable: String(Boolean(data.negotiable))
      };
  
      // Append all payload to FormData
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value);
      });
  
      // Handle file uploads
      if (images?.length) {
        images.forEach(image => {
          if (image instanceof File) {
            formData.append('images', image);
          }
        });
      }
      
      if (video instanceof File) {
        formData.append('video', video);
      }
  
      // Log FormData contents for debugging
      const formDataObj = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });
      console.log('Submitting form data:', formDataObj);
  
      const resultAction = await dispatch(addEquipment(formDataObj));
  
      if (resultAction.type === addEquipment.fulfilled.type) {
        toast.success(resultAction.payload.message);
        router.push('/');
      } else {
        const errorMessage = resultAction.payload?.error || 
                            resultAction.payload?.message || 
                            'Failed to add equipment';
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('Equipment creation error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      const errorMessage = error.response?.data?.message || 
                          error.response?.data?.error ||
                          'An error occurred while adding equipment';
      toast.error(errorMessage);
    }
  };
    const renderStep1 = () => (
      
      <div className="max-w-2xl mx-auto p-6">
      <ToastContainer />
      {/* <form onSubmit={handleSubmit(onSubmit)} className="space-y-6"> */}
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
            { value: 'construction', label: 'Construction' },
            { value: 'agriculture', label: 'Agriculture' }
          ]}
          error={errors.category}
        />

        <FormSelect
          label="Sub Category"
          name="subcategory"
          register={register}
          options={[
            { value: 'heavy', label: 'Heavy Equipment' },
            { value: 'light', label: 'Light Equipment' },
            { value: 'tools', label: 'Tools' },
            { value: 'accessories', label: 'Accessories' }
          ]}
          error={errors.subcategory}
        />

        <FormInput
          label="Equipment Name"
          name="name"
          register={register}
          error={errors.name}
        />

        <FormInput
          label="Description"
          name="description"
          register={register}
          error={errors.description}
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-gray-100"
          />
          <div className="mt-2 grid grid-cols-3 gap-2">
            {previewImages.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index + 1}`}
                className="h-24 w-24 object-cover rounded"
              />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-gray-100"
          />
        </div>

       
      {/* </form> */}
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

    const renderStep3 = () => {
      return (
        <div className="space-y-4">
          <h2 className="text-xl text-center font-semibold mb-6">Pricing</h2>
          
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
    
          <div className="flex gap-4">
            <FormInput
              label="Price"
              name="price"
              type="number"
              min="0"
              register={register}
              error={errors.price}
            />
            <FormSelect
              label="Currency"
              name="currency"
              register={register}
              options={[
                { value: 'USD', label: 'USD' },
                { value: 'EUR', label: 'EUR' },
              ]}
            />
          </div>
    
          <FormCheckbox
            label="Negotiable"
            name="isNegotiable"
            register={register}
          />
    
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700">Payment Method</h3>
            <div role="radiogroup" className="space-y-2">
              <FormCheckbox
                label="Pay On Delivery"
                name="paymentMethod"
                value="onDelivery"
                register={register}
                type="radio"
              />
              <FormCheckbox
                label="Payment After Usage"
                name="paymentMethod"
                value="afterUsage"
                register={register}
                type="radio"
              />
            </div>
          </div>
        </div>
      );
    };
  
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
                  
                  className={`px-4 py-2 text-sm font-medium text-white rounded-md flex items-center justify-center
                    ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-800'}`}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Complete'
                  )}
                </button>
            )}
          </div>
        </form>
      </div>
    );
  };
  