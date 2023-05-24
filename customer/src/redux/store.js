import { createStore, combineReducers, applyMiddleware } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/ProductReducers";
import { cartReducer } from "./reducers/CartReducers";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./reducers/UserReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer,
} from "./reducers/OrderReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
});

// const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];

// // login
// const userInfoFromLocalStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

// // shippingAddress
// const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
//   ? JSON.parse(localStorage.getItem("shippingAddress"))
//   : {};

// const initialState = {
//   cart: {
//     cartItems: cartItemsFromLocalStorage,
//     shippingAddress: shippingAddressFromLocalStorage,
//   },
//   userLogin: { userInfo: userInfoFromLocalStorage },
// };

const middleware = [thunk];

const store = configureStore({
  reducer,
  // initialState,
  middleware,
});

export default store;