"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Loader2, Plus, X } from 'lucide-react';
import FormInput from "./Form";
import FormSelect from './FormSelect';
import FormCheckbox from './FormCheckbox';
import ListingSummary from '@/components/listing/Summary';
import { addEquipment } from "@/redux/reducers/equipmentReducer";
import 'react-toastify/dist/ReactToastify.css';

export default function EquipmentForm() {
  const [step, setStep] = useState(1);
  const [coverImage, setCoverImage] = useState(null);
  const [thumbnails, setThumbnails] = useState([]);
  const [video, setVideo] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const router = useRouter();
  const { loading } = useSelector((state) => state.equipment || {});
  const { user } = useSelector(state => state.auth);
  const userId = user?._id;
  console.log('the user i need', user?._id);
 


  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues
  } = useForm({
    defaultValues: {
      location: '',
      category: '',
      subcategory: '',
      name: '',
      description: '',
      brand: '',
      model: '',
      workingcondition: 'new',
      pricingschedule: '',
      amount: '',
      negotiable: false,
      ownerName: '',
      ownerCity: '',
      ownerPhone: '',
      ownerEmail: ''
    }
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
   
  
    if (!storedToken) {
      router.push('/login');
      toast.error('Please log in to add equipment');
      return;
    }
  
    setToken(storedToken);
   
  }, [router]);
  

  const handleFileUpload = (e, type) => {
    const files = Array.from(e.target.files);
    
    const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const validVideoTypes = ['video/mp4', 'video/mpeg', 'video/quicktime'];
    
    const maxImageSize = 5 * 1024 * 1024; // 5MB
    const maxVideoSize = 50 * 1024 * 1024; // 50MB

    files.forEach(file => {
      if (type === 'cover' || type === 'thumbnails') {
        if (!validImageTypes.includes(file.type)) {
          toast.error('Please upload only image files (JPEG, PNG)');
          return;
        }
        if (file.size > maxImageSize) {
          toast.error('Image size should be less than 5MB');
          return;
        }

        if (type === 'cover') {
          setCoverImage(file);
          setPreviewImages(prev => ({ ...prev, cover: URL.createObjectURL(file) }));
        } else {
          setThumbnails(prev => [...prev, file]);
          setPreviewImages(prev => ({
            ...prev,
            thumbnails: [...(prev.thumbnails || []), URL.createObjectURL(file)]
          }));
        }
      } else if (type === 'video') {
        if (!validVideoTypes.includes(file.type)) {
          toast.error('Please upload only video files (MP4, MPEG)');
          return;
        }
        if (file.size > maxVideoSize) {
          toast.error('Video size should be less than 50MB');
          return;
        }

        setVideo(file);
        setPreviewImages(prev => ({ ...prev, video: URL.createObjectURL(file) }));
      }
    });
  };

  const removeFile = (type, index) => {
    if (type === 'cover') {
      setCoverImage(null);
      setPreviewImages(prev => ({ ...prev, cover: null }));
    } else if (type === 'thumbnails') {
      setThumbnails(prev => prev.filter((_, i) => i !== index));
      setPreviewImages(prev => ({
        ...prev,
        thumbnails: prev.thumbnails.filter((_, i) => i !== index)
      }));
    } else if (type === 'video') {
      setVideo(null);
      setPreviewImages(prev => ({ ...prev, video: null }));
    }
  };

  const onSubmit = async (data) => {
    try {
      console.log('Raw form data:', data);
      const formData = new FormData();
      // const userId = '6798e8a28eacebb41f667db3';
      console.log('I like the id:', userId);
      formData.append('userId', userId);
      formData.append('location', data.location);
      // formData.append('category', data.category);
      // formData.append('subcategory', data.subcategory);
      formData.append('category', 'june');
      formData.append('subcategory', 'apremedi');
      formData.append('name', data.name);
      formData.append('description', data.description);
  
      formData.append('brand', data.brand);
      formData.append('model', data.model);
      formData.append('workingcondition', data.workingcondition === 'new');
     
      // formData.append('pricingschedule', data.pricingschedule);
      formData.append('pricingschedule', 'weely');
      formData.append('amount', Number(data.amount));
      formData.append('negotiable', data.negotiable === true);
      
      formData.append('owner[name]', data.ownerName);
      formData.append('owner[city]', data.ownerCity);
      formData.append('owner[phonenumber]', data.ownerPhone);
      formData.append('owner[email]', data.ownerEmail);
    
      if (coverImage) {
        formData.append('coverimage', coverImage);
      }
      
      if (thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
          formData.append('thumbnails', thumbnail);
        });
      }
      
      if (video) {
        formData.append('video', video);
      }

      console.log('FormData contents:');
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      const resultAction = await dispatch(addEquipment({formData, token }));

      if (resultAction.type === addEquipment.fulfilled.type) {
        toast.success(resultAction.payload.message);
        router.push('/');
      } else {
        toast.error(resultAction.payload?.message || 'Failed to add equipment');
      }
    } catch (error) {
      console.error('Equipment creation error:', error);
      toast.error('Failed to create equipment listing');
    }
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Basic Details</h2>
      
      <FormInput
        label="Location"
        name="location"
        register={register}
        error={errors.location}
        placeholder="e.g., Lagos, Nigeria"
        required
      />

      <FormSelect
        label="Category"
        name="category"
        register={register}
        options={[
          { value: 'Construction', label: 'Construction' },
          { value: 'Mining', label: 'Mining' },
          { value: 'Agriculture', label: 'Agriculture' }
        ]}
        error={errors.category}
        required
      />

      <FormSelect
        label="Sub Category"
        name="subcategory"
        register={register}
        options={[
          { value: 'Excavators', label: 'Excavators' },
          { value: 'Bulldozers', label: 'Bulldozers' },
          { value: 'Cranes', label: 'Cranes' }
        ]}
        error={errors.subcategory}
        required
      />

      <FormInput
        label="Equipment Name"
        name="name"
        register={register}
        error={errors.name}
        placeholder="e.g., CAT 320D Excavator"
        required
      />

      <FormInput
        label="Description"
        name="description"
        register={register}
        error={errors.description}
        placeholder="Detailed description of the equipment"
        required
      />
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Equipment Details & Media</h2>
      
      <FormInput
        label="Brand"
        name="brand"
        register={register}
        error={errors.brand}
        placeholder="e.g., Caterpillar"
        required
      />

      <FormInput
        label="Model"
        name="model"
        register={register}
        error={errors.model}
        placeholder="e.g., 320D"
        required
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Working Condition</label>
        <div className="flex gap-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              {...register('workingcondition')}
              value="new"
              className="form-radio"
            />
            <span className="ml-2">New</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              {...register('workingcondition')}
              value="used"
              className="form-radio"
            />
            <span className="ml-2">Used</span>
          </label>
        </div>
      </div>

      {/* Media Upload Section */}
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Cover Image</label>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer bg-yellow-50 hover:bg-yellow-100 p-4 rounded-lg">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, 'cover')}
                className="hidden"
              />
              <Plus className="h-6 w-6 text-gray-400" />
            </label>
            {previewImages.cover && (
              <div className="relative">
                <img
                  src={previewImages.cover}
                  alt="Cover preview"
                  className="h-20 w-20 object-cover rounded-lg"
                />
                <button
                  onClick={() => removeFile('cover')}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Additional Images</label>
          <div className="flex flex-wrap gap-4">
            <label className="cursor-pointer bg-yellow-50 hover:bg-yellow-100 p-4 rounded-lg">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleFileUpload(e, 'thumbnails')}
                className="hidden"
              />
              <Plus className="h-6 w-6 text-gray-400" />
            </label>
            {previewImages.thumbnails?.map((preview, index) => (
              <div key={index} className="relative">
                <img
                  src={preview}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-20 w-20 object-cover rounded-lg"
                />
                <button
                  onClick={() => removeFile('thumbnails', index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Video</label>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer bg-yellow-50 hover:bg-yellow-100 p-4 rounded-lg">
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleFileUpload(e, 'video')}
                className="hidden"
              />
              <Plus className="h-6 w-6 text-gray-400" />
            </label>
            {previewImages.video && (
              <div className="relative">
                <video
                  src={previewImages.video}
                  className="h-20 w-20 object-cover rounded-lg"
                  controls
                />
                <button
                  onClick={() => removeFile('video')}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Pricing & Owner Details</h2>
      
      <FormSelect
        label="Pricing Schedule"
        name="pricingschedule"
        register={register}
        options={[
          { value: 'Per Hour', label: 'Per Hour' },
          { value: 'Per Day', label: 'Per Day' },
          { value: 'Per Week', label: 'Per Week' },
          { value: 'Per Month', label: 'Per Month' }
        ]}
        error={errors.pricingschedule}
        required
      />

      <FormInput
        label="Amount"
        name="amount"
        type="number"
        register={register}
        error={errors.amount}
        required
      />

      <FormCheckbox
        label="Price is Negotiable"
        name="negotiable"
        register={register}
      />

      {/* Owner Details */}
      <div className="space-y-4 mt-8">
        <h3 className="text-lg font-medium">Owner Information</h3>
        
        <FormInput
          label="Full Name"
          name="ownerName"
          register={register}
          error={errors.ownerName}
          required
        />

        <FormInput
          label="City"
          name="ownerCity"
          register={register}
          error={errors.ownerCity}
          required
        />

        <FormInput
          label="Phone Number"
          name="ownerPhone"
          register={register}
          error={errors.ownerPhone}
          placeholder="e.g., +2348012345678"
          required
        />

        <FormInput
          label="Email"
          name="ownerEmail"
          type="email"
          register={register}
          error={errors.ownerEmail}
          required
        />
      </div>
    </div>
  );

  const renderStep4 = () => {
    const formData = getValues();
    const summaryData = {
      images: previewImages.thumbnails || [],
      coverImage: previewImages.cover,
      video: previewImages.video,
      title: formData.name,
      location: formData.location,
      cost: formData.amount,
      description: formData.description,
      brand: formData.brand,
      model: formData.model,
      workingCondition: formData.workingcondition === 'new' ? 'New' : 'Used',
      pricingSchedule: formData.pricingschedule,
      negotiable: formData.negotiable,
      owner: {
        name: formData.ownerName,
        city: formData.ownerCity,
        phone: formData.ownerPhone,
        email: formData.ownerEmail
      }
    };

    return (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold mb-6">Review Your Listing</h2>
        <ListingSummary {...summaryData} />
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-8 text-center">List an Equipment</h1>
      
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between">
          {['Basic Details', 'Equipment & Media', 'Pricing & Owner', 'Review'].map((label, index) => (
            <div 
              key={label} 
              className={`flex items-center ${index < 3 ? 'flex-1' : ''}`}
            >
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center
                ${step > index + 1 ? 'bg-green-500' : step === index + 1 ? 'bg-blue-500' : 'bg-gray-200'}
                text-white font-medium
              `}>
                {index + 1}
              </div>
              {index < 3 && (
                <div className={`
                  flex-1 h-1 mx-2
                  ${step > index + 1 ? 'bg-green-500' : 'bg-gray-200'}
                `} />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-6">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
        
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
          
          {step < 4 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="ml-auto px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className={`ml-auto px-4 py-2 text-sm font-medium text-white rounded-md flex items-center
                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600'}`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Listing'
              )}
            </button>
          )}
        </div>
      </form>

      <ToastContainer position="bottom-right" />
    </div>
  );
}