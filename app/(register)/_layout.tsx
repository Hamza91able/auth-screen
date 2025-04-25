import { Stack, useNavigation } from "expo-router";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

function BackButton() {
  const navigation = useNavigation();

  return (
    <View>
      <IconButton
        icon="arrow-left-circle"
        size={32}
        onPress={() => navigation.goBack()}
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
