import {
  GET_TECHS,
  TECHS_ERROR,
  DELETE_TECH,
  ADD_TECH,
} from "../actions/types";

//Get ALL TECHS
export const getTechs = () => async (dispatch) => {
  try {
    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    });
  }
};

// delete techs
// export const deleteTech = (fName) => async (dispatch) => {
//   try {
//     await fetch("/techs", {});
//   } catch (error) {}
// };

// Add Techniacian
export const addTech = (tech) => async (dispatch) => {
  try {
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data,
    });
  }
};
