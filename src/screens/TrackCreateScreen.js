import "../_mockLocation";
import React, { useState, useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import { FontAwesome } from "react-native-vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { recording }
  } = useContext(LocationContext);

  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>TrackCreate Screen</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome size={20} name="plus" />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
