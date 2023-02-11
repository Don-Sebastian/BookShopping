import * as actionTypes from '../constants/bookConstants';

export const getProductReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOKS_REQUEST:
            return {
                loading: true,
                products: [],
            }
        case actionTypes.GET_BOOKS_SUCESS:
            return {
                loading: false,
                products: action.payload
            }
        case actionTypes.GET_BOOKS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const getProductDetailsReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_BOOKS_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_BOOKS_DETAILS_SUCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_BOOKS_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_BOOKS_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};