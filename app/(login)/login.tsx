import React, { useState } from "react";
import TextInput from "@/components/TextInputs/TextInput/TextInput";
import PasswordInput from "@/components/TextInputs/PasswordInput/PasswordInput";
import {
  View,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useTheme, Text } from "react-native-paper";
import Button from "@/components/Button/Button";
import { useRouter } from "expo-router";
import { validateEmail } from "@/validations/emailValidators";
import DangerText from "@/components/Text/DangerText";
import { useAuth } from "@/context/AuthContext/useAuth";
import { removeSpaces } from "@/utils/stringUtils";

export default function login() {
  const theme = useTheme();
  const router = useRouter();
  const { login } = useAuth();

  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const [dangerTexts, setDangerTexts] = React.useState<{
    email: boolean;
    password: boolean;
  }>({
    email: false,
    password: false,
  });

  const onChange = (key: keyof typeof loginData, text: string) => {
    setLoginData({ ...loginData, [key]: removeSpaces(text) });
  };

  const validate = () => {
    const validators = { ...dangerTexts };

    if (!validateEmail(loginData.email)) validators.email = true;
    else validators.email = false;

    if (loginData.password.length < 6) validators.password = true;
    else validators.password = false;

    setDangerTexts(validators);

    if (validators.email === false && validators.password === false)
      return true;
    else return false;
  };

  const onSubmit = () => {
    if (!validate()) return;

    try {
      login(loginData.email.toLowerCase(), loginData.password);
    } catch (err) {}
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
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
            <TextInput
              onChange={(text) => onChange("email", text)}
              value={loginData.email}
              label="Enter Email Address"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View
            style={[
              {
                flexDirection: "row",
                marginTop: 10,
                marginBottom: 30,
              },
            ]}
          >
            {dangerTexts.email && (
              <DangerText text="Email is Not in Valid Format" />
            )}
          </View>

          <View
            style={[
              {
                flexDirection: "row",
              },
            ]}
          >
            <PasswordInput
              label="Password"
              onChange={(text) => onChange("password", text)}
              value={loginData.password}
            />
          </View>

          <View
            style={[
              {
                flexDirection: "row",
                marginTop: 10,
                marginBottom: 30,
              },
            ]}
          >
            {dangerTexts.password && (
              <DangerText text="Password Needs to Be at Least 6 Characters" />
            )}
          </View>

          <View
            style={[
              {
                flexDirection: "row",
                marginBottom: 30,
              },
            ]}
          >
            <Button text="Login" onPress={onSubmit} />
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
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
