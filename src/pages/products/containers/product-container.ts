import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../../store";
import { productsData } from "../selectors";
import Products from "../";
import { addProduct } from "../../basket/slices/basket-slice";
const mapStateToProps = (state: RootState) => {
  return {
    products: productsData(state),
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return bindActionCreators(
    {
      addProductToBasket: addProduct,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
