import Button from "@/components/Button/Button";
import { useAuth } from "@/context/AuthContext/useAuth";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

export default function Home() {
  const theme = useTheme();
  const { user, logout } = useAuth();

  const handleLogout = (clearAsyncStorage: boolean) => {
    logout(clearAsyncStorage);
  };

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
          backgroundColor: theme.colors.primary,
        },
      ]}
    >
      <Text variant="displaySmall" style={styles.welcomeText}>
        Hello! 👋
      </Text>
      <Text variant="titleLarge">You are logged in as: {user.name}</Text>
      <Text variant="titleLarge">Email: {user.email}</Text>

      <View style={styles.logoutView}>
        <Button text="Logout!" onPress={() => handleLogout(false)} />
        <Button
          text="Clear Async Storage!"
          onPress={() => handleLogout(true)}
          style={{ marginTop: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    marginTop: "10%",
  },
  logoutView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
  },
});
