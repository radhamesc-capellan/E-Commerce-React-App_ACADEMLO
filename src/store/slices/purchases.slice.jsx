import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const purchasesSlice = createSlice({
		name: 'purchases',
    initialState: [],
    reducers: {
        
    }
})

export const {  } = purchasesSlice.actions;

export default purchasesSlice.reducer;