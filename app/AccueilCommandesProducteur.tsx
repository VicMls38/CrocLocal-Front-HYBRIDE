import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import OrdersCarousel from "@/components/OrdersCarousel";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.6;
const SPACING = 15;

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Image principale */}
      <Image source={require("@/assets/images/panier.png")} style={styles.mainImage} />
      <Text style={styles.description}>
        Retrouve facilement tes commandes de la semaine ! {"\n"}Prépare tes livraisons et suis-les !
      </Text>

      {/* Titre */}
      <Text style={styles.sectionTitle}>Tes commandes de la semaine</Text>

      {/* Carrousel des commandes */}
      <View style={styles.carouselWrapper}>
        <OrdersCarousel />
      </View>

      {/* Carte "Voir mon planning de commande" avec une image de fond */}
      <TouchableOpacity>
      <ImageBackground 
        source={require("@/assets/images/planning_croque.png")} 
        style={styles.planningCard}
        imageStyle={styles.imageBackground}
      >
        <Image source={require("@/assets/images/calendar_icon.png")} style={styles.calendarIcon} />
        <Text style={styles.planningText}>Voir mon planning {"\n"} de commande</Text>
      </ImageBackground>
      </TouchableOpacity>

      {/* Lien vers l'historique des commandes */}
      <TouchableOpacity>
        <Text style={styles.historyText}>Voir mon historique de commandes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
    marginBottom: 10,
  },
  mainImage: {
    width: 80,
    height: 80,
    marginVertical: 10,
    marginBottom: 20,
  },
  description: {
    textAlign: "center",
    color: "#333",
    fontSize: 14,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 10,
  },
  carouselWrapper: {
    width: "100%",
    alignItems: "center",
  },
  scrollContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: (width - ITEM_WIDTH) / 2,
    marginVertical: 20,
  },
  orderCard: {
    width: ITEM_WIDTH,
    height: 140,
    backgroundColor: "#E8F5C8",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    marginHorizontal: SPACING,
    justifyContent: "space-between",
  },
  orderStatus: {
    fontSize: 12,
    color: "#70B54D",
    alignSelf: "flex-start",
  },
  orderImage: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  orderTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  planningCard: {
    width: "100%",
    height: 150, // Ajuste la hauteur de la carte pour une meilleure visibilité de l'image
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "center", // Centrer le contenu verticalement
  },
  imageBackground: {
    width: "100%",
    resizeMode: "contain", // S'assure que l'image s'ajuste sans être déformée
    borderRadius: 12, // Ajoute un arrondi à l'image de fond
  },
  calendarIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  planningText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  historyText: {
    color: "#70B54D",
    textDecorationLine: "underline",
  },
});
