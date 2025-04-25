import React from "react";
import EmailInput from "@/components/TextInputs/EmailInput/EmailInput";
import PasswordInput from "@/components/TextInputs/PasswordInput/PasswordInput";
import { View, StyleSheet } from "react-native";
import { useTheme, Text } from "react-native-paper";
import Button from "@/components/Button/Button";

export default function Register() {
  const theme = useTheme();

  return (
    <>
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
            backgroundColor: theme.colors.primary,
          },
        ]}
      >
        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <Text style={[styles.signUpLabel]}>Sign Up</Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <Text style={[styles.signUpDetails]}>
            Enter your details to sign up
          </Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <EmailInput />
        </View>

        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <PasswordInput label="Password" />
        </View>

        <View
          style={[
            {
              flexDirection: "row",
              marginTop: 30,
              marginBottom: 10,
            },
          ]}
        >
          <PasswordInput label="Confirm Password" />
        </View>

        <View
          style={[
            {
              flexDirection: "row",
              marginBottom: 30,
            },
          ]}
        >
          <Text>Password Should Match</Text>
        </View>

        <Button text="Sign Up" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  signUpLabel: {
    fontSize: 22,
    fontWeight: "bold",
  },
  signUpDetails: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 20,
  },
});
