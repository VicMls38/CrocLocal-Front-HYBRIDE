import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Navbar from "@/components/navbarConsommateur"; 
import { router } from 'expo-router';

export default function OrderHistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Retour */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Titre */}
      <Text style={styles.title}>TON HISTORIQUE <Text style={styles.bold}>DE COMMANDES</Text></Text>

      {/* Liste des commandes */}
      <ScrollView style={styles.orderList}>
        {["Chez Salade", "Les jardins du Coteau", "La ferme de Charauze"].map((place, index) => (
          <View key={index} style={styles.orderCard}>
            <View style={styles.orderInfo}>
              <Text style={styles.orderTitle}>{place}</Text>
              <Text style={styles.orderDetails}>Retrait le Ven. {27 - index * 10} Dec. 16h30</Text>
              <Text style={styles.orderDetails}>{index === 0 ? "La Buisse" : index === 1 ? "Voiron" : "Saint Egrève"}</Text>
              <Text style={styles.price}>12.99€</Text>
              <TouchableOpacity><Text style={styles.detailText}>Voir le détail</Text></TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <View style={styles.orderStatus}>
              <View style={styles.statusContainer}>
                <Icon name="checkmark-circle" size={14} color="#70B54D" />
                <Text style={styles.statusText}>Retirée</Text>
                <Text style={styles.orderDate}>{24 - index * 10}/12/24</Text>
              </View>
              <TouchableOpacity><Text style={styles.reorderText}>Commander à nouveau</Text></TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <Navbar></Navbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 70,
  },
  bold: {
    fontWeight: "bold",
  },
  orderList: {
    paddingHorizontal: 20,
  },
  orderCard: {
    backgroundColor: "#F3CFB6",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  orderInfo: {
    flex: 2.5,
  },
  orderTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  orderDetails: {
    fontSize: 11,
    color: "#555",
  },
  price: {
    fontWeight: "bold",
    fontSize: 13,
    marginTop: 5,
  },
  separator: {
    width: 1,
    backgroundColor: "#000",
    height: "80%",
    marginHorizontal: 10,
  },
  orderStatus: {
    flex: 1.5,
    alignItems: "flex-start",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    color: "#70B54D",
    marginLeft: 5,
    fontSize: 11,
  },
  orderDate: {
    fontSize: 11,
    color: "#555",
    marginLeft: 10,
  },
  detailText: {
    textDecorationLine: "underline",
    color: "#000",
    fontSize: 11,
    marginTop: 5,
  },
  reorderText: {
    textDecorationLine: "underline",
    color: "#000",
    fontSize: 11,
    marginTop: 10,
  },
});
