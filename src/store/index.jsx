import { configureStore } from "@reduxjs/toolkit";
import isLoadingSlice from "./slices/isLoading.slice";
import productsListSlice from "./slices/productsList.slice";

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    productsList: productsListSlice,
  },
});
