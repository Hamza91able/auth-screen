import React from "react";

import { AuthContext } from "./AuthContext";
import {
  getUserData,
  saveUser,
  validateUserAlreadyExists,
} from "@/utils/storage";
import { hashPassword } from "@/utils/passwordUtils";
import { ToastAndroid } from "react-native";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const login = async (email: string, password: string) => {
    try {
      const user: {
        email: string;
        password: string;
      } | null = await getUserData(email);

      if (!user) return alert("Invalid credentials");

      const hashedPassword = await hashPassword(password);

      if (user.password != hashedPassword) return alert("Invalid credentials");

      ToastAndroid.show("Success", ToastAndroid.LONG);

      return user;
    } catch (err) {
      console.error("Error while logging in user", err);
    }
  };

  const logout = () => {};

  const register = async (email: string, password: string) => {
    try {
      const alreadyExists = await validateUserAlreadyExists(email);

      if (alreadyExists) return alert("User already exists");

      const hashedPassword = await hashPassword(password);

      await saveUser(email, hashedPassword);

      ToastAndroid.show("Success", ToastAndroid.LONG);
    } catch (err) {
      console.error("Error while registering user", err);
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
