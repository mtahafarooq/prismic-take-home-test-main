import { createSlice } from "@reduxjs/toolkit";
import { rulesMockData } from "../rules-mock-data";
import { Rule } from "../types/rule";

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
  reducers: {},
});

export default ruleSlice.reducer;
