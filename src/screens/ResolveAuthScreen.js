import React, { useEffect, useContext } from "react";
import { View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

export default () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};
