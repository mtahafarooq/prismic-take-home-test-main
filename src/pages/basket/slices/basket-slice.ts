import { createSlice } from "@reduxjs/toolkit";
import { Basket } from "../types/basket";

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
  reducers: {},
});

export default basketSlice.reducer;
