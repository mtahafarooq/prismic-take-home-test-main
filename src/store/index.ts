import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../pages/products/slices/product-slice";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
