import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter track name"
        />
      </Spacer>
      {recording ? (
        <Spacer>
          <Button
            title="Stop recording"
            onPress={stopRecording}
            buttonStyle={{ backgroundColor: "red" }}
          />
        </Spacer>
      ) : (
        <Spacer>
          <Button
            title="Start recording"
            onPress={startRecording}
            buttonStyle={{ backgroundColor: "green" }}
          />
        </Spacer>
      )}

      {!recording && locations.length ? (
        <Spacer>
          <Button title="Save recording" onPress={saveTrack} />
        </Spacer>
      ) : null}
    </>
  );
};

export default TrackForm;
