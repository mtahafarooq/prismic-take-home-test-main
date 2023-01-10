import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "../pages/basket/slices/basket-slice";
import { productSlice } from "../pages/products/slices/product-slice";
import { ruleSlice } from "../pages/rules/slices/rule-slice";
export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    rule: ruleSlice.reducer,
    basket: basketSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
