import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      name: "Hyunho"
    }
  ]
};

const firstSlice = createSlice({
  name: "firstSlice",
  initialState,
  reducers: {
    plus: (state, action) => {
      return { data: [...state.data, action.payload] };
    },
    minus: (state, action) => {
      return { data: [...state.data.filter(item => item.name !== action.payload.name)] };
    },
  },
});

export const { plus, minus } = firstSlice.actions;
export default configureStore({
  reducer: {
    first: firstSlice.reducer,
  }
})