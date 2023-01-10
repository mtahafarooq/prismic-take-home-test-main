import { createSlice } from "@reduxjs/toolkit";
import { Basket } from "../types/basket";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BasketStateModel {
  basket: Basket;
}

const initialState: BasketStateModel = {
  basket: {},
};

const REDUCER_NAME = "basket";

export const basketSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<string>) {
      if (state.basket[action.payload]) {
        ++state.basket[action.payload];
      } else {
        state.basket[action.payload] = 1;
      }
    },
    removeProduct(state, action: PayloadAction<string>) {
      delete state.basket[action.payload];
    },
  },
});
export const { addProduct, removeProduct } = basketSlice.actions;

export default basketSlice.reducer;
