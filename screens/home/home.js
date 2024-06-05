import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signOutUser, getCurrentUser } from '../../services/auth';
import styles from './styles';
import destaques from '../../data/destaques.json';

export default function HomeScreen({ route }) {
  const [userName, setUserName] = useState('User');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      if (user && user.displayName) {
        setUserName(user.displayName);
      } else {
        setUserName('User');
      }
    };
    fetchUser();
  }, [route.params?.userName]);

  const handleLogout = async () => {
    await signOutUser();
    setUserName(null);
    navigation.navigate('Profile', { screen: 'Login' });
  };

  const handleHighlightPress = (item) => {
    navigation.navigate('DetalhesDestaque', { item });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Olá, {userName}</Text>
            <Text style={styles.welcomeText}>BEM-VINDO!</Text>
          </View>
          <Image source={require('../../assets/profile.png')} style={styles.profileImage} />
        </View>

        <View style={styles.banner}>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Botão do Banner</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categorySection}>
          <Text style={styles.categoryTitle}>CATEGORIAS</Text>
          <View style={styles.category}>
            <View style={styles.categoryItem}>
              <TouchableOpacity>
                <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.categoryImage} />
                <Text style={styles.categoryText}>Categoria 1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryItem}>
              <TouchableOpacity>
                <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.categoryImage} />
                <Text style={styles.categoryText}>Categoria 2</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryItem}>
              <TouchableOpacity>
                <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.categoryImage} />
                <Text style={styles.categoryText}>Categoria 3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryItem}>
              <TouchableOpacity>
                <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.categoryImage} />
                <Text style={styles.categoryText}>Categoria 4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.highlightSection}>
          <Text style={styles.highlightTitle}>DESTAQUES</Text>
          <View style={styles.highlight}>
            {destaques.map((item, index) => (
              <View key={index} style={styles.highlightItem}>
                <TouchableOpacity onPress={() => handleHighlightPress(item)}>
                  <Image source={{ uri: item.foto, }} style={styles.highlightImage} />
                  <Text style={styles.highlightText}>{item.titulo}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
      </ScrollView>
    </View>
  );
}