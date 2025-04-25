import { Stack } from "expo-router";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    />
  );
}
