import { configureStore } from "@reduxjs/toolkit";
import isLoadingSlice from "./slices/isLoading.slice";
import productsListSlice from "./slices/productsList.slice";
import purchasesSlice from "./slices/purchases.slice";
import productsCartSlice from "./slices/productCart.slice";
import cartsSlice from "./slices/cart.slice";

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    productsList: productsListSlice,
    purchases: purchasesSlice,
    productsCart: productsCartSlice,
    carts: cartsSlice,
  },
});
