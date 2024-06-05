import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signUp } from '../../services/auth';
import Toast from 'react-native-toast-message';
import styles from './styles';

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      const user = await signUp(email, password, name);
      if (user && typeof user === 'object' && user.email) {
        Toast.show({
          type: 'success',
          text1: 'Registration Successful',
          text2: `Bem-vindo, ${user.name}`
        });
        navigation.navigate('HomeMain', { userName: user.name });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: user
        });
      }
    } catch (error) {
      const errorMessage = error.message ? error.message : 'Unknown error';
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: errorMessage
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Toast />
    </View>
  );
}