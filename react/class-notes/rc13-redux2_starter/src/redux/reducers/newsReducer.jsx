import {SET_NEWS, CLEAR_NEWS} from '../types/newsTypes';

const initialState = {
    newsList : []
}

const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_NEWS:
    return { ...state, newsList: payload };

    case CLEAR_NEWS:
        return { ...state, newsList: [] };

  default:
    return state
  }
};

export default newsReducer;
