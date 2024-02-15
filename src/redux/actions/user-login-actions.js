export const userDetailsActions = (userDetails) => {
  return (dispatch) => {
    dispatch({
      type: "SET_USER_DETAILS",
      payload: userDetails,
    });
  };
};
export const userAuthAction = (status) => {
  return (dispatch) => {
    dispatch({
      type: "SET_AUTHENTICATION",
      payload: status,
    });
  };
};
export const addNewUserAction = (name, value) => {
  return (dispatch) => {
    dispatch({
      type: "SET_NEW_USER_DETAILS",
      payload: value,
    });
  };
};
export default userDetailsActions;
