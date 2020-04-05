import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

export default ({ buttonText, navigate }) => {
  return (
    <TouchableOpacity onPress={navigate}>
      <Text style={styles.link}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    marginTop: 10,
    color: "blue"
  }
});
