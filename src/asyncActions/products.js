import { BASE_URL } from '..';
import {
  allProductsAction,
  allProductsSaleAction,
  productByIdAction,
  productsByCategoryAction,
} from '../store/productsReducer';

const timeout = func => setTimeout(func, 500);

export function fetchAllProducts(callback) {
  return function (dispatch) {
    fetch(BASE_URL + '/products/all')
      .then((res) => res.json())
      .then((data) => dispatch(allProductsAction(data)))
      .finally(timeout(callback));
  };
}

export function fetchAllProductsSale(callback) {
  return function (dispatch) {
    fetch(BASE_URL + '/products/all')
      .then((res) => res.json())
      .then((data) => {
        const filtered_data = data.filter(
          (elem) => elem.discont_price,
        );
        dispatch(allProductsSaleAction(filtered_data));
      })
      .finally(timeout(callback));
  };
}

export function fetchAllProductsByCategories(id, callback) {
  return function (dispatch) {
    fetch(BASE_URL + '/categories/' + id)
      .then((res) => res.json())
      .then((data) => dispatch(productsByCategoryAction(data)))
      .finally(timeout(callback));
  };
}

export function fetchProductById(id) {
  return function (dispatch) {
    fetch(BASE_URL + '/products/' + id)
      .then((res) => res.json())
      .then((data) => dispatch(productByIdAction(data)));
  };
}