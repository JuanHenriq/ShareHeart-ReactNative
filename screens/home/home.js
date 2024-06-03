import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signOutUser } from '../../services/auth';
import styles from './styles';

export default function HomeScreen({ route }) {
  const navigation = useNavigation();
  const userName = route.params?.userName || 'User'; 

  const handleLogout = async () => {
    await signOutUser();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {userName}</Text>
      <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
    </View>
  );
}
