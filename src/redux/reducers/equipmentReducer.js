import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASEURL } from '@/utils/config';


const initialState = {
  equipments: [],
  favorites: [],
  selectedEquipment: null,
  loading: false,
  error: null,
  message: null,
  offers: [],
  currentOffer: null,
};

console.log('This is the base url:', BASEURL);

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

export const addToFavorites = createAsyncThunk(
  'equipments/addToFavorites',
  async (equipmentId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `https://${BASEURL}/offer/makeoffer`,
        { equipmentId },
        {
          headers: { 'Authorization': `Bearer ${token}` }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserFavorites = createAsyncThunk(
  'equipments/fetchUserFavorites',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `https://${BASEURL}/userfavorite/usersfavorite`,
        {
          headers: { 'Authorization': `Bearer ${token}` }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  'equipments/removeFromFavorites',
  async (favoriteId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(
        `https://${BASEURL}/userfavorite/deletefavorite/${favoriteId}`,
        {
          headers: { 'Authorization': `Bearer ${token}` }
        }
      );
      return { favoriteId, ...response.data };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const makeOffer = createAsyncThunk(
  'equipments/makeOffer',
  async (offerData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      console.log('Making offer with data:', offerData); // Debug log

      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await axios.post(
        `https://${BASEURL}/offer/makeoffer`,
        offerData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      console.log('Offer response:', response.data); // Debug log
      return response.data;
    } catch (error) {
      console.error('Offer error:', error); // Debug log
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


const equipmentsSlice = createSlice({
  name: 'equipments',
  initialState,
  reducers: {
    clearEquipmentState: (state) => {
      state.error = null;
      state.message = null;
    },
    clearCurrentOffer: (state) => {
      state.currentOffer = null;
    }
  },
  extraReducers: (builder) => {
    builder
      
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
      })
      .addCase(addToFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites.push(action.payload.newFavorite);
        state.message = action.payload.message;
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

   
      .addCase(fetchUserFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = action.payload;
      })
      .addCase(fetchUserFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

     
      .addCase(removeFromFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favorites = state.favorites.filter(
          fav => fav._id !== action.payload.favoriteId
        );
        state.message = 'Equipment removed from favorites';
      })
      .addCase(removeFromFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
     
    
      .addCase(makeOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(makeOffer.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOffer = action.payload.offer;
        state.message = action.payload.message;
        state.offers.push(action.payload.offer);
      })
      .addCase(makeOffer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearEquipmentState, clearCurrentOffer } = equipmentsSlice.actions;
export default equipmentsSlice.reducer;