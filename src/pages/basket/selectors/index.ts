import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { productsData } from "../../products/selectors";
import { Product } from "../../products/types/product";
import { rulesData } from "../../rules/selectors";
import { Rule } from "../../rules/types/rule";
import { BasketStateModel } from "../slices/basket-slice";
import { Basket } from "../types/basket";

export const basketState = (state: RootState) => state.basket;

export const basketData = createSelector(
  [basketState],
  (basketState: BasketStateModel) => basketState.basket
);

export const checkout = createSelector(
  [basketData, rulesData, productsData],
  (basketData: Basket, rulesData: Rule, productsData: Product) => {
    let total = 0;

    for (const [product, quantity] of Object.entries(basketData)) {
      const rule = rulesData[product];

      if (rule && quantity >= rule.quantity) {
        const basePriceUnits = quantity % rule.quantity;
        const timesTheRule = (quantity - basePriceUnits) / rule.quantity;

        total +=
          timesTheRule * rule.price +
          basePriceUnits * productsData[product].unitPrice;
      } else {
        total += quantity * productsData[product].unitPrice;
      }
    }
    return total;
  }
);
