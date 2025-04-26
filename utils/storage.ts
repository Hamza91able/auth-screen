import AsyncStorage from "@react-native-async-storage/async-storage";

export const validateUserAlreadyExists = async (email: string) => {
  try {
    await AsyncStorage.clear();
    const user = await getUserData(email);

    return user ? true : false;
  } catch (err) {
    console.error("Error while validating user", err);
  }
};

export const saveUser = async (email: string, password: string) => {
  try {
    await AsyncStorage.setItem(email, JSON.stringify({ email, password }));
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
