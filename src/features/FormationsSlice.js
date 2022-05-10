import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formations: [],
};

export const formationsSlice = createSlice({
  name: 'formations',
  initialState,
  reducers: {
    SetFormations: (state, action) => {
      state.formations = action.payload;
    },
    AddFormation: (state, action) => {
      state.formations = [...state.formations, action.payload];
    },
    ClearFormations: (state) => {
      state.formations = null;
    },
  },
});

export const { SetFormations, AddFormation, ClearFormations } =
  formationsSlice.actions;

export const selectFormations = (state) => state.formations.formations;

export default formationsSlice.reducer;
