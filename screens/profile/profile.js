import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import { getCurrentUser, signOutUser } from '../../services/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { auth } from '../../firebaseConfig';
import { List } from 'react-native-paper';

export default function ProfileScreen() {
  const [user, setUser] = useState(null);
  const [donations, setDonations] = useState([]);
  const navigation = useNavigation();
  const db = getFirestore();

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

  useEffect(() => {
    const fetchDonations = async () => {
      if (auth.currentUser) {
        const q = query(collection(db, "donations"), where("userId", "==", auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        const userDonations = [];
        querySnapshot.forEach((doc) => {
          userDonations.push(doc.data());
        });
        setDonations(userDonations);
      }
    };

    fetchDonations();
  }, [auth.currentUser]);

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
        <>
          <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
          <View style={styles.donationHistoryContainer}>
            <List.Accordion
              title="Histórico de Doações"
              left={props => <List.Icon {...props} icon="folder" />}
            >
              {donations.map((donation, index) => (
                <View key={index} style={styles.donationItem}>
                  <Text style={styles.donationText}>Empresa: {donation.company}</Text>
                  <Text style={styles.donationText}>Valor: {donation.amount}</Text>
                  <Text style={styles.donationText}>Data: {new Date(donation.date.seconds * 1000).toLocaleDateString()}</Text>
                </View>
              ))}
            </List.Accordion>
          </View>
        </>
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