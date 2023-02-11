import * as actionTypes from '../constants/bookConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_BOOKS_REQUEST });

        const { data } = await axios.post('/api/books');
        
        dispatch({
            type: actionTypes.GET_BOOKS_SUCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_BOOKS_FAIL,
            payload:
            error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_BOOKS_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/book/${id}`);

    dispatch({
      type: actionTypes.GET_BOOKS_DETAILS_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_BOOKS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_BOOKS_DETAILS_RESET,
    })
}