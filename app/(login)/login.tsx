import React from "react";
import EmailInput from "@/components/TextInputs/EmailInput/EmailInput";
import PasswordInput from "@/components/TextInputs/PasswordInput/PasswordInput";
import { View, StyleSheet, Pressable } from "react-native";
import { useTheme, Text } from "react-native-paper";
import Button from "@/components/Button/Button";
import { useRouter } from "expo-router";

export default function login() {
  const theme = useTheme();
  const router = useRouter();

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
          <Text style={[styles.signUpLabel]}>Login</Text>
        </View>

        <View
          style={[
            {
              flexDirection: "row",
            },
          ]}
        >
          <Text style={[styles.signUpDetails]}>
            Enter your details to login
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
              marginBottom: 30,
            },
          ]}
        >
          <PasswordInput label="Password" />
        </View>

        <View
          style={[
            {
              flexDirection: "row",
              marginBottom: 30,
            },
          ]}
        >
          <Button text="Login" />
        </View>

        <Pressable onPress={() => router.push("/register")}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Don't have an account?{" "}
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Get Started
            </Text>
          </Text>
        </Pressable>
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
