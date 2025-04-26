import React from "react";
import { StyleSheet } from "react-native";
import { Button as RNButton } from "react-native-paper";

export default function Button({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) {
  return (
    <RNButton
      mode="contained"
      onPress={onPress}
      theme={{
        colors: {
          primary: "white",
        },
      }}
      style={[styles.button]}
    >
      {text}
    </RNButton>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    width: "100%",
  },
});
