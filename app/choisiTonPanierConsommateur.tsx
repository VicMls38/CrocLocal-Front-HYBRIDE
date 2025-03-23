import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PanierCarousel from "@/components/PanierCarousel";
import Navbar from "@/components/navbarConsommateur"; 
import { router } from 'expo-router';

export default function OrderSelectionScreen() {
  const [validated, setValidated] = useState(false);
  const [quantity, setQuantity] = useState("1");
  const [date, setDate] = useState("18/06/2025 - 14h30");
  const [toteBags, setToteBags] = useState("0");

  return (
    <SafeAreaView style={styles.container}>
      {/* Bouton Retour */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Titre */}
      <Text style={styles.title}>CHOISIS <Text style={styles.bold}>TON PANIER</Text></Text>

      {/* Carrousel des paniers */}
      <View style={styles.carouselWrapper}>
        <PanierCarousel />
      </View>
      
      {/* Champs de saisie */}
      <Text style={styles.label}>Combien de panier souhaites-tu commander ?</Text>
      <TextInput
        style={styles.input}
        value={quantity}
        keyboardType="numeric"
        onChangeText={setQuantity}
        placeholder="1"
      />
      
      <Text style={styles.label}>Quand souhaites-tu la récupérer ?</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="18/06/2025 - 14h30"
      />
      
      {/* Section tote-bag */}
      <View style={styles.toteBagContainer}>
        <View style={styles.toteBagImageContainer}>
          <Image source={require("@/assets/images/tote-bag.png")} style={styles.toteBagImage} />
        </View>
        <View style={styles.toteBagContent}>
          <Text style={styles.label}>Combien de tote-bags souhaites-tu commander ?</Text>
          <TextInput
            style={styles.toteBagInput}
            value={toteBags}
            keyboardType="numeric"
            onChangeText={setToteBags}
            placeholder="0"
          />
        </View>
      </View>
      
      {/* Validation et boutons */}
      {validated && (
        <View style={styles.checkContainer}>
          <Icon name="checkmark-circle" size={24} color="green" />
        </View>
      )}
      
      <View style={styles.buttonContainer}>
        {!validated ? (
          <TouchableOpacity 
            style={styles.validateButton} 
            onPress={() => setValidated(true)}
          >
            <Text style={styles.buttonText}>Valider</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity 
              style={styles.commandButton} 
              onPress={() => router.push("/panierConsommateur")}
            >
              <Text style={styles.buttonText}>Commander</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.continueButton} 
              onPress={() => router.push("/wishlist")}
            >
              <Text style={styles.continueText}>Continuer mes achats</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
      
      <Navbar />
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
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
    marginBottom: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  carouselWrapper: {
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 14,
  },
  input: {
    width: "90%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#A2C653",
    borderRadius: 25,
    padding: 12,
    marginBottom: 15,
    textAlign: "center",
  },
  toteBagContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  toteBagImageContainer: {
    width: "30%",
  },
  toteBagImage: {
    width: 80,
    height: 100,
    resizeMode: "contain",
  },
  toteBagContent: {
    width: "70%",
  },
  toteBagInput: {
    borderWidth: 1,
    borderColor: "#A2C653",
    borderRadius: 25,
    padding: 12,
    textAlign: "center",
    marginRight: 20,
  },
  checkContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  buttonContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  validateButton: {
    backgroundColor: "#A2C653",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 5,
  },
  commandButton: {
    backgroundColor: "#CEDD8F",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 5,
  },
  continueButton: {
    backgroundColor: "#70B54D",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  continueText: {
    color: "white",
    fontWeight: "bold",
  },
});