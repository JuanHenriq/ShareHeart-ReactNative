// ProfileScreen.js
import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}