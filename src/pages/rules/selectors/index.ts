import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

import { RuleStateModel } from "../slices/rule-slice";

export const ruleState = (state: RootState) => state.rule;

export const rulesData = createSelector(
  [ruleState],
  (productState: RuleStateModel) => productState.rules
);
