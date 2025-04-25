import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "",
        headerStyle: {
          backgroundColor: "black",
        },
      }}
    />
  );
}
