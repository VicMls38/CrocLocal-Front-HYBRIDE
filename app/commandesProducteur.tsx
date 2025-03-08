import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import BouncyCheckbox from "react-native-bouncy-checkbox"; // Import de BouncyCheckbox
import Icon from "react-native-vector-icons/Ionicons";
import Navbar from "@/components/navbarProducteur"; 

const orders = [
  {
    id: "1",
    name: "MME. SMITH",
    details: "1 panier S . ..€",
    date: "25 mars à 16h30",
  },
  {
    id: "2",
    name: "M. JOKA",
    details: "1 panier S . ..€",
    date: "26 mars à 16h00",
  },
];

export default function OrderScreen() {
  const [checkedOrders, setCheckedOrders] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();

  // Fonction pour gérer le changement de sélection des commandes
  const handleCheckboxChange = (id: string, value: boolean) => {
    setCheckedOrders((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/accueilProducteur")}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.statusText}>À préparer</Text>
      </View>

      {/* Image et titre */}
      <Image source={require("@/assets/images/panier_s.png")} style={styles.image} />
      <Text style={styles.title}>2 paniers S</Text>

      {/* Liste des commandes */}
      
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        style={styles.orderList} // Appliquer la largeur de 75%
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <ScrollView>
            <View>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.orderDetails}>{item.details}</Text>
              <Text style={styles.orderDate}>{item.date}</Text>
            </View>
            
            {/* Remplacer CheckBox par BouncyCheckbox */}
            <BouncyCheckbox
              size={30}
              fillColor="#D26D34"
              unFillColor="#FFF"
              isChecked={checkedOrders[item.id]} // Vérifier l'état de la case
              disableText={true} // Désactive le texte interne
              onPress={(isChecked) => handleCheckboxChange(item.id, isChecked)} // Mettre à jour l'état de la case
            />
            </ScrollView>
          </View>
        )}
      />

      {/* Boutons d'action */}
      <TouchableOpacity style={styles.acceptButton}>
        <Text style={styles.buttonText}>Accepter la commande</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rejectButton}>
        <Text style={styles.buttonText}>Refuser la commande</Text>
      </TouchableOpacity>

      {/* Image en bas */}
      <Image source={require("@/assets/images/carotte_fourche.png")} style={styles.carotte} />
      <Navbar></Navbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  backButton: {
    fontSize: 20,
    fontWeight: "bold",
  },
  statusText: {
    color: "#D26D34",
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  orderList: {
    width: "75%", // FlatList prend 75% de la largeur de l'écran
  },
  orderItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  orderName: {
    fontWeight: "bold",
  },
  orderDetails: {
    color: "#333",
  },
  orderDate: {
    color: "#888",
  },
  acceptButton: {
    marginBottom: 10,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
  },
  rejectButton: {
    backgroundColor: "#A5D6A7",
    padding: 10,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  carotte: {
    width: 125,
    height: 125,
    resizeMode: "contain",
    marginTop: 30,
    marginBottom: 50,
  },
});
