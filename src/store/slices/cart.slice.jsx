import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";
import getConfig from "../../utils/getConfig";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const cartsSlice = createSlice({
  name: "carts",
  initialState: [],
  reducers: {
    setCarts: (state, action) => {
      const carts = action.payload;
      return carts;
    },
  },
});

export const getCartsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://e-commerce-api-v2.academlo.tech/api/v1/cart`,
      getConfig()
    )
    .then((res) => dispatch(setCarts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const purchaseCartThunk = (productDetail) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      "https://e-commerce-api-v2.academlo.tech/api/v1/cart", productDetail, {}, getConfig())
    .then((res) => dispatch(setCarts([])))
    .catch(() => alert('Hubo un error'))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setCarts } = cartsSlice.actions;

export default cartsSlice.reducer;
