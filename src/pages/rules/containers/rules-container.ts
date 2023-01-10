import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../../store";
import { rulesData } from "../selectors";
import Rules from "../";
import { removeRule } from "../slices/rule-slice";
const mapStateToProps = (state: RootState) => {
  return {
    rules: rulesData(state),
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    {
      removeRule: removeRule,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Rules);
