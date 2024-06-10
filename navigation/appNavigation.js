import React from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/user_login/userLogin';
import RegisterScreen from '../screens/user_register/userRegister';
import HomeScreen from '../screens/home/home';
import ProfileScreen from '../screens/profile/profile';
import HighlightScreen from '../screens/highlight/highlight';
import NewsScreen from '../screens/news/news';
import DonateScreen from '../screens/donate/donate';

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
      <Stack.Screen 
        name="Notícias"
        component={NewsScreen}
        options={{ headerShown: true, title: 'Notícias' }}
      />
    </Stack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="ProfileMain" 
        component={ProfileScreen} 
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();

            // Reset the navigation state
            e.target.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'ProfileMain' }],
              })
            );
          },
        }}
      />
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
        <Tab.Screen name="Doar" component={DonateScreen} />
        <Tab.Screen name="Notícias" component={NewsScreen} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}