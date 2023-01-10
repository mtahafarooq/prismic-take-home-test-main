import { createSlice } from "@reduxjs/toolkit";
import { Rule } from "../types/rule";

export interface RuleStateModel {
  rules: Rule;
}

const initialState: RuleStateModel = {
  rules: {} as Rule,
};

const REDUCER_NAME = "rule";

export const ruleSlice = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {},
});

export default ruleSlice.reducer;
