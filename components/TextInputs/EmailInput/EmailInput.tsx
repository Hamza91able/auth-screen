import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function EmailInput() {
  return (
    <TextInput
      label="Enter Email Address"
      keyboardType="email-address"
      autoCapitalize="none"
      mode="outlined"
      style={[styles.textInput]}
      cursorColor="white"
      theme={{
        roundness: 10,
        colors: {
          primary: "white",
        },
      }}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 30,
    width: "100%",
  },
});
