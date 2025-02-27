import React, { useState } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PanierCarousel from "@/components/PanierCarousel";

export default function OrderSelectionScreen() {
  const [validated, setValidated] = useState(false);
  const [quantity, setQuantity] = useState("1");
  const [date, setDate] = useState("25/06/2025 - 14h30");
  const [toteBags, setToteBags] = useState("0");

  return (
    <SafeAreaView style={styles.container}>
      {/* Retour */}
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Titre */}
      <Text style={styles.title}>CHOISIS <Text style={styles.bold}>TON PANIER</Text></Text>

            {/* Carrousel des commandes */}
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
      />
      
      <Text style={styles.label}>Quand souhaites-tu la récupérer ?</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />
      
      
      <View style={styles.toteBagContainer}>
        <Image source={require("@/assets/images/tote-bag.png")} style={styles.toteBagImage} />
        <Text style={styles.label}>Combien de tote-bags {"\n"} souhaites-tu commander ?</Text>
        <TextInput
          style={styles.inputSmall}
          value={toteBags}
          keyboardType="numeric"
          onChangeText={setToteBags}
        />
      </View>
      
      {/* Bouton Valider ou Options */}
      {!validated ? (
        <TouchableOpacity style={styles.validateButton} onPress={() => setValidated(true)}>
          <Text style={styles.buttonText}>Valider</Text>
        </TouchableOpacity>
      ) : (
        <>
          <Icon name="checkmark-circle" size={32} color="green" style={styles.checkIcon} />
          <TouchableOpacity style={styles.commandButton}>
            <Text style={styles.buttonText}>Commander</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueText}>Continuer mes achats</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingTop: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    marginLeft: 20,
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
  carousel: {
    flexDirection: "row",
    marginBottom: 20,
  },
  panierCard: {
    backgroundColor: "#E8F5C8",
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  carouselWrapper: {
    width: "100%",
    alignItems: "center",
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 40,
    marginBottom: 5,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#A2C653",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    textAlign: "center",
  },
  toteBagContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  toteBagImage: {
    width: 150,
    height: 220,
  },
  inputSmall: {
    width: "20%",
    borderWidth: 1,
    borderColor: "#A2C653",
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
  },
  validateButton: {
    backgroundColor: "#A2C653",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  checkIcon: {
    marginTop: 10,
  },
  commandButton: {
    backgroundColor: "#A2C653",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  continueButton: {
    marginTop: 10,
  },
  continueText: {
    color: "#A2C653",
    fontWeight: "bold",
  },
});
