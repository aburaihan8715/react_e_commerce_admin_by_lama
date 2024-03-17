import { loginFailure, loginStart, loginSuccess } from './userSlice';

import { publicRequest, userRequest } from '../requestMethods';
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from './productSlice';

// LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('auth/login', user);
    // console.log(res);
    dispatch(loginSuccess(res.data.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// GET ALL PRODUCTS
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get('products');
    dispatch(getProductSuccess(res.data.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

// DELETE A PRODUCT
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // await userRequest.delete(`products/${id}`); // It remove from database
    dispatch(deleteProductSuccess(id)); // It remove from redux store
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

// UPDATE A PRODUCT
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

// ADD A PRODUCT
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`products`, product);
    dispatch(addProductSuccess(res.data.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
