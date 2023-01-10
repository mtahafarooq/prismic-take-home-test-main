import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../../store";
import { rulesData } from "../selectors";
import Rules from "../";
import { addRule, removeRule } from "../slices/rule-slice";
import { productsData } from "../../products/selectors";
const mapStateToProps = (state: RootState) => {
  return {
    rules: rulesData(state),
    products: productsData(state),
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    {
      removeRule: removeRule,
      addRule: addRule,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Rules);
