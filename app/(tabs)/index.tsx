import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête stylisé avec une image en fond */}
      <ImageBackground source={require("@/assets/images/header_croque.png")} style={styles.header}>
        <Text style={styles.title}>Bonjour !</Text>
      </ImageBackground>

      {/* Question */}
      <Text style={styles.question}>Qui es-tu ?</Text>

      {/* Boutons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Un producteur</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Un consommateur</Text>
      </TouchableOpacity>

      {/* Image de la carotte */}
      <Image source={require("@/assets/images/carotte.png")} style={styles.carotte} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    paddingTop: 20,
  },
  header: {
    width: "90%",
    height: 100, // Ajuste la hauteur selon ton design
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3D3D3D",
    textAlign: "center",
  },
  question: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    backgroundColor: "#D26D34",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  carotte: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginTop: 40,
  },
});
