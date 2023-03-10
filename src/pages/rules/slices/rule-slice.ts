import { createSlice } from "@reduxjs/toolkit";
import { rulesMockData } from "../rules-mock-data";
import { Rule } from "../types/rule";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RuleStateModel {
  rules: Rule;
}

const initialState: RuleStateModel = {
  rules: rulesMockData,
};

const REDUCER_NAME = "rule";

export const ruleSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    removeRule(state, action: PayloadAction<string>) {
      delete state.rules[action.payload];
    },
    addRule(state, action: PayloadAction<Rule>) {
      const newRule: Rule = action.payload;
      const newRuleName: string = Object.keys(newRule).toString();
      state.rules[newRuleName] = newRule[newRuleName];
    },
  },
});

export const { removeRule, addRule } = ruleSlice.actions;

export default ruleSlice.reducer;
