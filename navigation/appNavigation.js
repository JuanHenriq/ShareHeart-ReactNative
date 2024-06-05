import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/user_login/userLogin";
import RegisterScreen from "../screens/user_register/userRegister";
import HomeScreen from "../screens/home/home";
import ProfileScreen from "../screens/profile/profile";
import HighlightScreen from "../screens/highlight/highlight";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="HomeMain" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Destaques"
          component={HighlightScreen}
          options={({ route }) => ({
            headerShown: true,
            title: route.params.item.titulo,
            headerBackTitleVisible: false,
          })}
        />
      </Stack.Navigator>
    );
  }
  

function ProfileStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export function AppNavigation({ initialRoute }) {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={initialRoute}>
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}