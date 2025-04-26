import { User } from "@/constants/user.type";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const validateUserAlreadyExists = async (email: string) => {
  try {
    const user = await getUserData(email);

    return user ? true : false;
  } catch (err) {
    console.error("Error while validating user", err);
  }
};

export const saveUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    await AsyncStorage.setItem(
      email,
      JSON.stringify({ name, email, password })
    );
  } catch (err) {
    console.error("Error while saving user", err);
  }
};

export const getUserData = async (email: string) => {
  try {
    const user = await AsyncStorage.getItem(email);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error retrieving user data", error);
    return null;
  }
};

export const saveLoggedInUser = async (user: User) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (err) {
    console.error("Error while saving logged in user", err);
  }
};

export const getLoggedInUser = async () => {
  try {
    const user = await AsyncStorage.getItem("user");

    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error retrieving logged in user data", error);
    return null;
  }
};

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (err) {
    console.error("Error while clearing async storage", err);
  }
};
