import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASEURL } from '@/utils/config';

// Initial state
const initialState = {
  equipments: [],
  selectedEquipment: null,
  loading: false,
  error: null,
  message: null
};

console.log('This is the base url:', BASEURL);

// Async thunks
export const fetchEquipments = createAsyncThunk(
  'equipments/fetchEquipments',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://${BASEURL}/equipment/allequipment`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const configureFormData = (equipmentData) => {
  const token = localStorage.getItem('token');
  
  return {
    method: 'POST',
    url: `https://${BASEURL}/equipment/addequipment`,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data', // Important for file uploads
    },
    data: equipmentData
  };
};

// export const addEquipment = createAsyncThunk(
//   'equipments/addEquipment',
//   async (formDataObj, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem('token');
      
//       if (!token) {
//         return rejectWithValue({ message: 'No authentication token found' });
//       }

//       // Create a new FormData instance
//       const data = new FormData();
      
//       // Add each field from formData to the new FormData instance
//       Object.entries(formDataObj).forEach(([key, value]) => {
//         if (key === 'images') {
//           // Handle multiple images
//           Array.from(value).forEach(image => {
//             data.append('images', image);
//           });
//         } else if (key === 'video') {
//           // Handle video
//           if (value) {
//             data.append('video', value);
//           }
//         } else {
//           // Handle other fields
//           data.append(key, value);
//         }
//       });

//       const config = {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//           'Accept': 'application/json'
//         },
//         // timeout: 30000,
//         maxBodyLength: Infinity,
//         maxContentLength: Infinity
//       };

//       console.log('Request config:', {
//         headers: config.headers,
//         url: `https://${BASEURL}/equipment/addequipment`
//       });

//       console.log('Sending request with data:', Object.fromEntries(data));

//       const response = await axios.post(
//         `https://${BASEURL}/equipment/addequipment`,
//         data, // Fixed: Send data instead of formDataObj
//         config
//       );

//       return response.data;
//     } catch (error) {
//       console.error('Add equipment error:', error);
      
//       if (error.code === 'ERR_NETWORK') {
//         return rejectWithValue({ 
//           message: 'Network error - please check your connection and try again'
//         });
//       }

//       if (error.response?.status === 500) {
//         return rejectWithValue({
//           message: error.response.data.error || 'Server error occurred'
//         });
//       }

//       return rejectWithValue(
//         error.response?.data || { message: 'Failed to add equipment' }
//       );
//     }
//   }
// );

export const addEquipment = createAsyncThunk(
  'equipments/addEquipment',
  async ({formData, token}, { rejectWithValue }) => {
    try {
      
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      console.log('FormData contents in reducer:');
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }


      const response = await axios.post(
        `https://${BASEURL}/equipment/addequipment`,
        formData,
        config
      );

      

      return response.data;
    } catch (error) {
      console.error('Add equipment error:', error);
      return rejectWithValue(
        error.response?.data || { message: 'Failed to add equipment' }
      );
    }
  }
);

export const fetchEquipmentById = createAsyncThunk(
  'equipments/fetchEquipmentById',
  async (id, { rejectWithValue }) => {
    console.log('The fetch equipment id:', id);
    try {
      const response = await axios.get(`https://${BASEURL}/equipment/particularequipment/${id}`);
      console.log('The response', response.data);
      return response.data;
      
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteEquipment = createAsyncThunk(
  'equipments/deleteEquipment',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`https://${BASEURL}/equipment/deleteequipment/${id}`);
      return { ...response.data, id };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice
const equipmentsSlice = createSlice({
  name: 'equipments',
  initialState,
  reducers: {
    clearEquipmentState: (state) => {
      state.error = null;
      state.message = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch all equipments
      .addCase(fetchEquipments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEquipments.fulfilled, (state, action) => {
        state.loading = false;
        state.equipments = action.payload;
      })
      .addCase(fetchEquipments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch equipments';
      })
      // Add equipment
      .addCase(addEquipment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addEquipment.fulfilled, (state, action) => {
        state.loading = false;
        state.equipments.push(action.payload.newEquipment);
        state.message = action.payload.message;
      })
      .addCase(addEquipment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to add equipment';
      })
      // Fetch single equipment
      .addCase(fetchEquipmentById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEquipmentById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedEquipment = action.payload;
      })
      .addCase(fetchEquipmentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch equipment';
      })
      // Delete equipment
      .addCase(deleteEquipment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEquipment.fulfilled, (state, action) => {
        state.loading = false;
        state.equipments = state.equipments.filter(
          equipment => equipment._id !== action.payload.id
        );
        state.message = action.payload.message;
      })
      .addCase(deleteEquipment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to delete equipment';
      });
  }
});

export const { clearEquipmentState } = equipmentsSlice.actions;
export default equipmentsSlice.reducer;