import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function EmailInput({
  onChange,
  value,
}: {
  onChange: (text: string) => void;
  value: string;
}) {
  return (
    <TextInput
      label="Enter Email Address"
      keyboardType="email-address"
      autoCapitalize="none"
      mode="outlined"
      style={[styles.textInput]}
      cursorColor="white"
      onChange={(e) => onChange(e.nativeEvent.text)}
      value={value}
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
    width: "100%",
  },
});
