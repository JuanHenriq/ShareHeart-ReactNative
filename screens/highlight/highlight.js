import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';

export default function HighlightScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.foto }} style={styles.detailImage} />
      <Text style={styles.detailTitle}>{item.titulo}</Text>
      <Text style={styles.detailDescription}>{item.descricao}</Text>
      <Text style={styles.detailContact}>Telefone: {item.telefone}</Text>
      <Text style={styles.detailContact}>Email: {item.email}</Text>
      <Text style={styles.detailContact}>Endereço: {item.endereco}</Text>
    </ScrollView>
  );
}