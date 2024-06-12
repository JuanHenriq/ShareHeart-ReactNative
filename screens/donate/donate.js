import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Linking, Modal, TextInput, Button, ScrollView } from "react-native";
import { RadioButton } from "react-native-paper";
import styles from "./styles";
import alimentosData from "../../data/alimentos.json";
import causasData from "../../data/causas.json";
import dinheiroData from "../../data/dinheiro.json";
import roupasData from "../../data/roupas.json";
import doacoesData from "../../data/doacoes.json"; 
import { auth } from "../../firebaseConfig";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigation, useRoute } from "@react-navigation/native";

const Donate = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState(doacoesData);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const db = getFirestore();

  useEffect(() => {
    if (route.params) {
      const { selectedCategory } = route.params;
      if (selectedCategory) {
        handleCategorySelect(selectedCategory);
      }
    }
  }, [route.params]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    switch (category) {
      case "alimentos":
        setItems(alimentosData);
        break;
      case "causas":
        setItems(causasData);
        break;
      case "dinheiro":
        setItems(dinheiroData);
        break;
      case "roupas":
        setItems(roupasData);
        break;
      default:
        setItems(doacoesData);
    }
  };

  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  const handlePhonePress = (phoneNumber) => {
    openLink(`tel:${phoneNumber}`);
  };

  const handleEmailPress = (email) => {
    openLink(`mailto:${email}`);
  };

  const handleAddressPress = (address) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    openLink(url);
  };

  const handleDonatePress = (item) => {
    if (auth.currentUser) {
      setSelectedItem(item);
      setModalVisible(true);
    } else {
      navigation.navigate("Profile", { screen: "Login" });
    }
  };

  const handleDonationSubmit = async () => {
    setModalVisible(false);

    if (auth.currentUser) {
      const user = auth.currentUser;
      try {
        await addDoc(collection(db, "donations"), {
          userId: user.uid,
          company: selectedItem.titulo,
          amount: donationAmount,
          date: new Date(),
        });

        openLink(selectedItem.site);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RadioButton.Group
        onValueChange={(value) => handleCategorySelect(value)}
        value={selectedCategory}
      >
        <View style={styles.categoriesContainer}>
          <View style={styles.category}>
            <RadioButton
              value="alimentos"
              color="#FF7700"
              uncheckedColor="#000000"
            />
            <Text style={styles.categoryText}>Alimentos</Text>
          </View>
          <View style={styles.category}>
            <RadioButton
              value="causas"
              color="#FF7700"
              uncheckedColor="#000000"
            />
            <Text style={styles.categoryText}>Causas Sociais</Text>
          </View>
          <View style={styles.category}>
            <RadioButton
              value="dinheiro"
              color="#FF7700"
              uncheckedColor="#000000"
            />
            <Text style={styles.categoryText}>Dinheiro</Text>
          </View>
          <View style={styles.category}>
            <RadioButton
              value="roupas"
              color="#FF7700"
              uncheckedColor="#000000"
            />
            <Text style={styles.categoryText}>Roupas</Text>
          </View>
        </View>
      </RadioButton.Group>

      {items.map((item, index) => (
        <View key={index} style={styles.cardContainer}>
          <Image source={{ uri: item.foto }} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{item.titulo}</Text>
          <Text style={styles.cardDescription}>{item.descricao}</Text>
          <TouchableOpacity onPress={() => handlePhonePress(item.telefone)}>
            <Text style={styles.detailContact}>Telefone: {item.telefone}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEmailPress(item.email)}>
            <Text style={styles.detailContact}>Email: {item.email}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAddressPress(item.endereco)}>
            <Text style={styles.detailContact}>Endereço: {item.endereco}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.donateButton} onPress={() => handleDonatePress(item)}>
            <Text style={styles.donateButtonText}>Doar</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Insira o valor que você quer doar para {selectedItem?.titulo}:
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={setDonationAmount}
              value={donationAmount}
              keyboardType="numeric"
              placeholder="Valor"
            />
            <View style={styles.modalButtonContainer}>
              <Button
                onPress={() => setModalVisible(false)}
                title="Cancelar"
                color="black"
              />
              <View style={{ marginHorizontal: 10 }} /> 
              <Button
                onPress={handleDonationSubmit}
                title="OK"
                color="#FF7700"
              />
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Donate;