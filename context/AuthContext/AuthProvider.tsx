import React, { useState } from "react";

import { AuthContext } from "./AuthContext";
import {
  clearAsyncStorage,
  getLoggedInUser,
  getUserData,
  saveLoggedInUser,
  saveUser,
  validateUserAlreadyExists,
} from "@/utils/storage";
import { hashPassword } from "@/utils/passwordUtils";
import { ToastAndroid } from "react-native";
import { User } from "@/constants/user.type";
import { useRouter } from "expo-router";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const user: {
        name: string;
        email: string;
        password: string;
      } | null = await getUserData(email);

      if (!user) return alert("Invalid credentials");

      const hashedPassword = await hashPassword(password);

      if (user.password != hashedPassword) return alert("Invalid credentials");

      ToastAndroid.show("Success", ToastAndroid.LONG);

      setUser({
        name: user.name,
        email: user.email,
      });

      await saveLoggedInUser({
        name: user.name,
        email: user.email,
      });

      router.replace("/home");
    } catch (err) {
      console.error("Error while logging in user", err);
    }
  };

  const logout = async (clearStorage: boolean) => {
    router.replace("/login");
    setUser(null);
    if (clearStorage) await clearAsyncStorage();
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const alreadyExists = await validateUserAlreadyExists(email);

      if (alreadyExists) return alert("User already exists");

      const hashedPassword = await hashPassword(password);

      await saveUser(name, email, hashedPassword);

      ToastAndroid.show("Success", ToastAndroid.LONG);
    } catch (err) {
      console.error("Error while registering user", err);
    }
  };

  const loggedInUser = async (): Promise<User | null> => {
    try {
      const user = await getLoggedInUser();

      if (user) setUser(user);

      return user;
    } catch (error) {
      console.error("Error retrieving logged in user data", error);
      logout(false);
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        user: user!!,
        getLoggedInUser: loggedInUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
