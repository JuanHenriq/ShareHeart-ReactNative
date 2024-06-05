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
        setUserName('');
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
    navigation.navigate('Destaques', { item });
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
          <Image source={require('../../assets/banner.jpg')} style={styles.banner} />
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Faça doação</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categorySection}>
          <Text style={styles.categoryTitle}>CATEGORIAS</Text>
          <View style={styles.category}>
            <View style={styles.categoryItem}>
              <TouchableOpacity>
                <View style={styles.categoryContainer}>
                  <Image source={require('../../assets/cifrao.png')} style={styles.categoryImage} />
                </View>
                <Text style={styles.categoryText}>Dinheiro</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryItem}>
              <TouchableOpacity>
                <View style={styles.categoryContainer}>
                  <Image source={require('../../assets/camiseta.png')} style={styles.categoryImage} />
                </View>
                <Text style={styles.categoryText}>Roupa</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryItem}>
              <TouchableOpacity>
                <View style={styles.categoryContainer}>
                  <Image source={require('../../assets/alimentos.png')} style={styles.categoryImage} />
                </View>
                <Text style={styles.categoryText}>Alimento</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryItem}>
              <TouchableOpacity>
                <View style={styles.categoryContainer}>
                  <Image source={require('../../assets/voluntariado.png')} style={styles.categoryImage} />
                </View>
                <Text style={styles.categoryText}>Voluntário</Text>
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
                  <Image source={{ uri: item.foto }} style={styles.highlightImage} />
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
