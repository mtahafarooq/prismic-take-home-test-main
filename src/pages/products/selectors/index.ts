import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

import { ProductStateModel } from "../slices/product-slice";

export const productState = (state: RootState) => state.product;

export const productsData = createSelector(
  [productState],
  (productState: ProductStateModel) => productState.products
);
