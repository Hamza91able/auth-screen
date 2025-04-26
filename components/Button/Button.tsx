import React from "react";
import { Animated, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Button as RNButton } from "react-native-paper";

export default function Button({
  text,
  onPress,
  style = {},
}: {
  text: string;
  onPress: () => void;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
}) {
  return (
    <RNButton
      mode="contained"
      onPress={onPress}
      theme={{
        colors: {
          primary: "white",
        },
      }}
      style={[styles.button, style]}
    >
      {text}
    </RNButton>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    width: "100%",
  },
});
