import { FETCH_DATA, SET_ALL_DATA } from "../action/properties";

const initialState = {
  props: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
        console.log(action);
      return {
        ...state,
        props: action.props,
      };
    default:
      return state;
  }
};
