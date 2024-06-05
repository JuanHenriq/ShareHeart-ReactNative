import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppNavigation } from "./navigation/appNavigation";

export default function App() {
  const [initialRoute, setInitialRoute] = useState("Home");

  useEffect(() => {
    const checkUserToken = async () => {
      const token = await AsyncStorage.getItem("userToken");
      if (!token) {
        setInitialRoute("Home");
      }
    };

    checkUserToken();
  }, []);

  return <AppNavigation initialRoute={initialRoute} />;
}