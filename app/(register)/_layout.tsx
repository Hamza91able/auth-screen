import { Stack, useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";

function BackButton() {
  const router = useRouter();

  return (
    <View>
      <IconButton
        icon="arrow-left-circle"
        size={32}
        onPressIn={() => router.replace("/login")}
        iconColor="white"
        style={{
          marginTop: 30,
          marginLeft: 0,
        }}
      />
    </View>
  );
}

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "",
        headerLeft: () => <BackButton />,
        headerStyle: {
          backgroundColor: "black",
        },
      }}
    />
  );
}
