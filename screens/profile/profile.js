import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import { getCurrentUser, signOutUser } from '../../services/auth';

export default function ProfileScreen() {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const fetchUser = async () => {
        const currentUser = await getCurrentUser();
        console.log('Current User:', currentUser);
        setUser(currentUser);
      };

      fetchUser();
    }, [])
  );

  const handleLogout = async () => {
    await signOutUser();
    setUser(null);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/profile.png')} style={styles.profileImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerBoldText}>Que alegria te ver!</Text>
          <Text style={styles.headerSubText}>
            {user ? `Olá, ${user.displayName}` : 'Já possui uma conta ou deseja criar?'}
          </Text>
        </View>
      </View>
      {user ? (
        <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Fazer Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonText}>Registrar-se</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}