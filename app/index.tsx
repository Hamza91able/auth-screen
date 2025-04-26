import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { useAuth } from "@/context/AuthContext/useAuth";
import { User } from "@/constants/user.type";
import { Text } from "react-native-paper";

export default function Index() {
  const { getLoggedInUser } = useAuth();

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleGetUser = async () => {
    const user = await getLoggedInUser();

    setUser(user);
    setLoading(false);
  };

  if (loading) return <Text>Loading</Text>;

  if (!user) return <Redirect href="/login" />;

  return <Redirect href="/home" />;
}
