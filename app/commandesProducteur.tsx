import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import BouncyCheckbox from "react-native-bouncy-checkbox";
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
        style={styles.orderList}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            {/* Texte de la commande */}
            <View style={styles.orderTextContainer}>
              <Text style={styles.orderName}>{item.name}</Text>
              <Text style={styles.orderDetails}>{item.details}</Text>
              <Text style={styles.orderDate}>{item.date}</Text>
            </View>

            {/* Checkbox alignée à droite */}
            <BouncyCheckbox
              size={30}
              fillColor="#D26D34"
              unFillColor="#FFF"
              isChecked={checkedOrders[item.id]}
              disableText={true}
              onPress={(isChecked) => handleCheckboxChange(item.id, isChecked)}
            />
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
      <Navbar />
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
    marginBottom: 30,
  },
  orderList: {
    width: "75%",
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Sépare le texte et la checkbox
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },
  orderTextContainer: {
    flex: 1, // Permet au texte de prendre tout l'espace disponible à gauche
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
    marginBottom: 15,
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
    marginTop: 25,
    marginBottom: 100,
  },
});

// export default OrderScreen; (removed duplicate export)
