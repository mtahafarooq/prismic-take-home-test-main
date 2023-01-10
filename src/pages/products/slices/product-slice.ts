import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product";

export interface ProductStateModel {
  products: Product;
}

const initialState: ProductStateModel = {
  products: {} as Product,
};

const REDUCER_NAME = "product";

export const productSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {},
});

export default productSlice.reducer;
