import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    equipments: [],
    loading: false,
    error: null
}

export const fetchEquipment = createAsyncThunk(
    'equipments/getEquipments',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('/api/equipments');
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
);

const equipmentsSlice = createSlice({
    name: 'equipments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEquipments.pending, (state) => {
                state.loading = true,
                state.error = null
            })
            .addCase(getEquipmens.fulfiled, (state, action) => {
                state.equipments = action.payload,
                state.loading = false,
                state.error = null
            })
            .addCase(getEquipments.rejected, (state, action) => {
                state.loading = false,
                state.error = action.payload
            })
    }
})

export default equipmentsSlice.reducer;