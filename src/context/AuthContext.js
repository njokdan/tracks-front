import createDataContext from "./createDataContext";
import TrackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGNIN":
      return { errorMessage: "", token: action.payload };
    case "CLEAR_ERROR":
      return { ...state, errorMessage: "" };
    case "SIGNOUT":
      return { errorMessage: "", token: null };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "SIGNIN", payload: token });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

const clearErrorMessage = dispatch => () => dispatch({ type: "CLEAR_ERROR" });

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await TrackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({
      type: "SIGNUP",
      payload: response.data.token
    });
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "ADD_ERROR",
      payload: "Something went wrong with sign up"
    });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "SIGNOUT" });
  navigate("loginFlow");
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await TrackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "SIGNIN", payload: response.data.token });
    navigate("TrackList");
  } catch (error) {
    dispatch({
      type: "ADD_ERROR",
      payload: "Something went wrong with sign in"
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
