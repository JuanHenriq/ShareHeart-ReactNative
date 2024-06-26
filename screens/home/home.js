import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import destaques from '../../data/destaques.json';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleHighlightPress = (item) => {
    navigation.navigate('Destaques', { item });
  };

  const handleCategoryPress = (category) => {
    navigation.navigate('Doar', { selectedCategory: category });
  };
  const handleDonatePress = () => {
    navigation.navigate('Doar');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Olá, seja</Text>
            <Text style={styles.welcomeText}>BEM-VINDO!</Text>
          </View>
          <Image source={require('../../assets/icons/main_icon.png')} style={styles.iconImage    } />
        </View>

        <View style={styles.banner}>
          <Image source={require('../../assets/banner.jpg')} style={styles.banner} />
          <TouchableOpacity style={styles.bannerButton} onPress={handleDonatePress}>
            <Text style={styles.bannerButtonText}>Faça doação</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categorySection}>
          <Text style={styles.categoryTitle}>CATEGORIAS</Text>
          <View style={styles.category}>
            <View style={styles.categoryItem}>
              <TouchableOpacity onPress={() => handleCategoryPress('alimentos')}>
                <View style={styles.categoryContainer}>
                  <Image source={require('../../assets/alimentos.png')} style={styles.categoryImage} />
                </View>
                <Text style={styles.categoryText}>Alimentos</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryItem}>
              <TouchableOpacity onPress={() => handleCategoryPress('causas')}>
                <View style={styles.categoryContainer}>
                  <Image source={require('../../assets/voluntariado.png')} style={styles.categoryImage} />
                </View>
                <Text style={styles.categoryText}>Causas Sociais</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryItem}>
              <TouchableOpacity onPress={() => handleCategoryPress('dinheiro')}>
                <View style={styles.categoryContainer}>
                  <Image source={require('../../assets/cifrao.png')} style={styles.categoryImage} />
                </View>
                <Text style={styles.categoryText}>Dinheiro</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryItem}>
              <TouchableOpacity onPress={() => handleCategoryPress('roupas')}>
                <View style={styles.categoryContainer}>
                  <Image source={require('../../assets/camiseta.png')} style={styles.categoryImage} />
                </View>
                <Text style={styles.categoryText}>Roupas</Text>
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
      </ScrollView>
    </View>
  );
}