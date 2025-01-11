import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching equipments
export const getEquipments = createAsyncThunk(
    'equipments/getEquipments',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('/api/equipments');
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

// Initial state
const initialState = {
    equipments: [],
    loading: false,
    error: null
};

// Equipments slice
const equipmentsSlice = createSlice({
    name: 'equipments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEquipments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getEquipments.fulfilled, (state, action) => {
                state.equipments = action.payload;
                state.loading = false;
            })
            .addCase(getEquipments.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

// Export the reducer
export default equipmentsSlice.reducer;
