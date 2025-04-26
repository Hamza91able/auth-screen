import React from "react";
import { KeyboardTypeOptions, StyleSheet } from "react-native";
import { TextInput as RNTextInput } from "react-native-paper";

export default function TextInput({
  onChange,
  value,
  autoCapitalize,
  keyboardType,
  label,
}: {
  onChange: (text: string) => void;
  value: string;
  label: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
}) {
  return (
    <RNTextInput
      label={label}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
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
