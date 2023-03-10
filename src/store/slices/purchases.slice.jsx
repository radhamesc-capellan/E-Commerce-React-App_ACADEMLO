import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";
import getConfig from "../../utils/getConfig";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const purchasesSlice = createSlice({
  name: "purchases",
  initialState: [],
  reducers: {
    setPurchases: (state, action) => {
      const purchases = action.payload;
      return purchases;
    },
  },
});

export const getPurchasesThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://e-commerce-api-v2.academlo.tech/api/v1/purchases`,
      getConfig()
    )
    .then((res) => dispatch(setPurchases(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

// export const purchaseCartThunk = (productDetail) => (dispatch) => {
//   dispatch(setIsLoading(true));
//   return axios
//     .post(
//       "https://e-commerce-api-v2.academlo.tech/api/v1/purchases", productDetail, getConfig())
//     .then((res) => dispatch(getPurchasesThunk()))
//     .catch(() => alert('Hubo un error'))
//     .finally(() => dispatch(setIsLoading(false)));
// };

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
