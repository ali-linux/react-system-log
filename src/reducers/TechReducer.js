import { ADD_TECH, GET_TECHS, TECHS_ERROR } from "../actions/types";

const initialState = {
  techs: [],
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
      };
    // case ADD_TECH:
    //   return{
    //     ...state,
    //   }
    case TECHS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
