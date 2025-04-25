import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function PasswordInput({ label }: { label: string }) {
  const [passwordVisiblity, setPasswordVisibility] = React.useState(false);

  return (
    <TextInput
      label={label}
      mode="outlined"
      secureTextEntry={!passwordVisiblity}
      autoCapitalize="none"
      style={[styles.textInput]}
      cursorColor="white"
      theme={{
        roundness: 10,
        colors: {
          primary: "white",
        },
      }}
      right={
        <TextInput.Icon
          icon={!passwordVisiblity ? "eye" : "eye-off"}
          onPress={() => setPasswordVisibility(!passwordVisiblity)}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
  },
});
