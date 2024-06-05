import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import styles from "./styles";

export default function HighlightScreen({ route }) {
  const { item } = route.params;

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const handlePhonePress = (phoneNumber) => {
    openLink(`tel:${phoneNumber}`);
  };

  const handleEmailPress = (email) => {
    openLink(`mailto:${email}`);
  };

  const handleAddressPress = (address) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    openLink(url);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.foto }} style={styles.detailImage} />
      <View style={styles.containerDescription}>
        <Text style={styles.detailTitle}>{item.titulo}</Text>
        <Text style={styles.detailDescription}>{item.descricao}</Text>
        <TouchableOpacity onPress={() => handlePhonePress(item.telefone.replace().trim())}>
          <Text style={styles.detailContact}>Telefone: {item.telefone.replace().trim()}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEmailPress(item.email.replace().trim())}>
          <Text style={styles.detailContact}>Email: {item.email.replace().trim()}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAddressPress(item.endereco)}>
          <Text style={styles.detailContact}>Endereço: {item.endereco}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
