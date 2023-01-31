import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productsListSlice = createSlice({
  name: "productsList",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload;
      return products;
    },
  },
});

export const getProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products`)
    .then((res) => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterProductCategorieThunk = (id) => dispatch => {
    dispatch(setIsLoading(true));
    axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
    .then(res => dispatch(setProducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
}

export const filterProductTitleThunk = (productSearch) => dispatch => {
    //dispatch(setIsLoading(true));
    axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${productSearch}`)
    .then(res => dispatch(setProducts(res.data)))
    .finally(setIsLoading(false));
}

export const { setProducts } = productsListSlice.actions;

export default productsListSlice.reducer;
