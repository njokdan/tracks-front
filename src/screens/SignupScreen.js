import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import EntryForm from "../components/EntryForm";
import BlueNavigationText from "../components/BlueNavigationText";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <EntryForm
        headline="Sign up for tracker"
        errorMessage={state.errorMessage}
        errorMessageText="Error"
        buttonTitle="Sign up"
        action={signup}
      />
      <BlueNavigationText
        buttonText="Already have an account? sign in instead"
        navigate={() => navigation.navigate("Signin")}
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    marginBottom: 300
  }
});

export default SignupScreen;
