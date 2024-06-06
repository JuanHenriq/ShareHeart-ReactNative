import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signIn } from '../../services/auth';
import Toast from 'react-native-toast-message';
import { auth } from '../../firebaseConfig';
import styles from './styles';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      const userName = auth.currentUser.displayName;
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
      });
      navigation.navigate('ProfileMain', { userName });
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
      <Image source={require('../../assets/main_icon.png')} style={styles.icon} />
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
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Não possui uma conta? Registrar-se</Text>
      </TouchableOpacity>
      <Toast />
    </View>
  );
}