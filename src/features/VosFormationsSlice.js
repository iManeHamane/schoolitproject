import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  vosFormations: [],
};

export const vosFormationsSlice = createSlice({
  name: 'vosFormations',
  initialState,
  reducers: {
    SetVosFormations: (state, action) => {
      state.vosFormations = action.payload;
    },
    AddVosFormations: (state, action) => {
      state.vosFormations = [...state.vosFormations, action.payload];
    },
    ClearVosFormations: (state) => {
      state.vosFormations = null;
    },
  },
});

export const { SetVosFormations, AddVosFormations, ClearVosFormations } =
  vosFormationsSlice.actions;

export const selectVosFormations = (state) => state.vosFormations.vosFormations;

export default vosFormationsSlice.reducer;
