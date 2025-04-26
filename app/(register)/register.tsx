import React from "react";
import TextInput from "@/components/TextInputs/TextInput/TextInput";
import PasswordInput from "@/components/TextInputs/PasswordInput/PasswordInput";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useTheme, Text } from "react-native-paper";
import Button from "@/components/Button/Button";
import DangerText from "@/components/Text/DangerText";
import { validateEmail } from "@/validations/emailValidators";
import { useAuth } from "@/context/AuthContext/useAuth";
import { useRouter } from "expo-router";
import { removeSpaces } from "@/utils/stringUtils";

export default function Register() {
  const theme = useTheme();
  const router = useRouter();
  const { register } = useAuth();

  const [registerData, setRegisterData] = React.useState<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [dangerTexts, setDangerTexts] = React.useState<{
    name: boolean;
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
  }>({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const onChange = (key: keyof typeof registerData, text: string) => {
    setRegisterData({ ...registerData, [key]: text });
  };

  const validate = () => {
    const validators = { ...dangerTexts };

    if (registerData.name.length < 3) validators.name = true;
    else validators.name = false;

    if (!validateEmail(registerData.email)) validators.email = true;
    else validators.email = false;

    if (registerData.password.length < 8) validators.password = true;
    else validators.password = false;

    if (registerData.password !== registerData.confirmPassword)
      validators.confirmPassword = true;
    else validators.confirmPassword = false;

    setDangerTexts(validators);

    if (
      validators.name === false &&
      validators.email === false &&
      validators.password === false &&
      validators.confirmPassword === false
    )
      return true;
    else return false;
  };

  const onSubmit = () => {
    if (!validate()) return;

    register(
      registerData.name,
      registerData.email.toLowerCase(),
      registerData.password
    );

    router.replace("/login");
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
            <TextInput
              onChange={(text) => onChange("name", text)}
              value={registerData.name}
              label="Enter Name"
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
              <DangerText text="Name needs to be at least 3 characters" />
            )}
          </View>

          <View
            style={[
              {
                flexDirection: "row",
              },
            ]}
          >
            <TextInput
              onChange={(text) => onChange("email", removeSpaces(text))}
              value={registerData.email}
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
              onChange={(text) => onChange("password", removeSpaces(text))}
              value={registerData.password}
            />
          </View>
          <View
            style={[
              {
                flexDirection: "row",
                marginTop: 10,
              },
            ]}
          >
            <Text>At least 8 to 15 characters in length</Text>
          </View>

          <View
            style={[
              {
                flexDirection: "row",
                marginTop: 10,
              },
            ]}
          >
            {dangerTexts.password && (
              <DangerText text="Password Needs to Be at Least 8 Characters" />
            )}
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
            <PasswordInput
              label="Confirm Password"
              onChange={(text) => onChange("confirmPassword", text)}
              value={registerData.confirmPassword}
            />
          </View>

          <View
            style={[
              {
                flexDirection: "row",
                marginBottom: 10,
              },
            ]}
          >
            <Text>Password Should Match</Text>
          </View>

          <View
            style={[
              {
                flexDirection: "row",
                marginBottom: 30,
              },
            ]}
          >
            {dangerTexts.confirmPassword && (
              <DangerText text="Password Don't Match" />
            )}
          </View>

          <Button text="Sign Up" onPress={onSubmit} />
        </View>
      </ScrollView>
      {/* <Snackbar
        visible={true}
        onDismiss={() => {}}
        
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
      >
        Hey there! I'm a Snackbar.
      </Snackbar> */}
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
