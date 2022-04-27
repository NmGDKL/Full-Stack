import {SET_NEWS, CLEAR_NEWS} from '../types/newsTypes';

export const getNewsData = (data) => ({
  type: SET_NEWS,
  payload : data
})

export const clearNewsData = () => ({
    type: CLEAR_NEWS,
})
