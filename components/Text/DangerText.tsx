import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function DangerText({ text }: { text: string }) {
  return <Text style={[styles.text]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontWeight: "bold",
  },
});
