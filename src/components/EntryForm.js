import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

export default ({
  headline,
  errorMessage,
  buttonTitle,
  action,
  errorMessageText
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headline}</Text>
      </Spacer>
      <Spacer>
        <Input
          label="email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          label="password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </Spacer>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessageText}</Text>
      ) : null}
      <Button title={buttonTitle} onPress={() => action({ email, password })} />
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginBottom: 10
  }
});
