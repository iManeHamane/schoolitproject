import { configureStore } from '@reduxjs/toolkit';
import formationsReducer from '../features/FormationsSlice';
import vosFormationsReducer from '../features/VosFormationsSlice';

export const store = configureStore({
  reducer: {
    formations: formationsReducer,
    vosFormations: vosFormationsReducer,
  },
});
