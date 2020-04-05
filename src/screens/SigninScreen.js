import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import EntryForm from "../components/EntryForm";
import BlueNavigationText from "../components/BlueNavigationText";
import { NavigationEvents } from "react-navigation";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <EntryForm
        headline="Sign in for tracker"
        errorMessage={state.errorMessage}
        errorMessageText="Error"
        buttonTitle="Sign in"
        action={signin}
      />
      <BlueNavigationText
        buttonText="Need to sign up?"
        navigate={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
