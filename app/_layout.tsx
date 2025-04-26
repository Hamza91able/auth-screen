import { AuthProvider } from "@/context/AuthContext/AuthProvider";
import { Stack } from "expo-router";
import { PaperProvider, MD3DarkTheme } from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/types";

const theme: ThemeProp = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "black",
    secondary: "white",
  },
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </PaperProvider>
    </AuthProvider>
  );
}
