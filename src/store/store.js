import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "../features/cryptoSlice";
import symbolReducer from "../features/symbolSlice"

export default configureStore({
  reducer: {
    crypto: cryptoReducer,
    symbol: symbolReducer,
  },
});
