import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../../store";
import { basketData, checkout } from "../selectors";
import Basket from "..";
import { removeProduct } from "../slices/basket-slice";
const mapStateToProps = (state: RootState) => {
  return {
    basket: basketData(state),
    checkoutTotal: checkout(state),
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    {
      removeProductFromBasket: removeProduct,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
