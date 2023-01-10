import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

import { BasketStateModel } from "../slices/basket-slice";

export const basketState = (state: RootState) => state.basket;

export const basketData = createSelector(
  [basketState],
  (basketState: BasketStateModel) => basketState.basket
);
