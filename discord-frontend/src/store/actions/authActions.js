import * as api from "../../api";
import { openAlertMessage } from "./alertAction";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};
export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  };
};
const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};
const login = (userDetails, history) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    //console.log("login", response);
    if (response.error) {
      // show error massage in alert
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      history("/dashboard");
    }
  };
};

const register = (userDetails, history) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    //console.log("register", response);
    if (response.error) {
      // show error massage in alert
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      history("/dashboard");
    }
  };
};
