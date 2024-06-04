import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/user_login/userLogin';
import RegisterScreen from './screens/user_register/userRegister';
import HomeScreen from './screens/home/home';
import ProfileScreen from './screens/profile/profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [initialRoute, setInitialRoute] = useState('Home');

  useEffect(() => {
    const checkUserToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        setInitialRoute('Home');
      }
    };

    checkUserToken();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={initialRoute}>
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}