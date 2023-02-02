import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import getConfig from "../../utils/getConfig";
import axios from "axios";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productsCartSlice = createSlice({
  name: "productsCart",
  initialState: [],
  reducers: {
    setProductsCart: (state, action) => {
      const productCart = action.payload;
      return productCart;
    },
  },
});

export const getProductsCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`, getConfig())
    .then((res) => dispatch(setProductsCart(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setProductsCart } = productsCartSlice.actions;

export default productsCartSlice.reducer;
