import { createSlice } from "@reduxjs/toolkit";

export const symbolSlice = createSlice({
  name: "symbol",
  initialState: {
    value: "₹",
  },
  reducers: {
    setSymbol: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setSymbol} = symbolSlice.actions;

export default symbolSlice.reducer;