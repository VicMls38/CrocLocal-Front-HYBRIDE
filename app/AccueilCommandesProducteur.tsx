import React from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import OrdersCarousel from "@/components/OrdersCarousel";
import { useRouter } from "expo-router";


const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.6;
const SPACING = 15;

export default function OrdersScreen() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/accueilProducteur")}>
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
        <View style={styles.planningCardContainer}>
          <ImageBackground 
            source={require("@/assets/images/planning_croque.png")} 
            style={styles.planningCard}
            imageStyle={styles.imageBackground} 
          >
            <View style={styles.overlay}>
              <Image source={require("@/assets/images/calendar_icon.png")} style={styles.calendarIcon} />
              <Text style={styles.planningText}>Voir mon planning {"\n"} de commande</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>







      {/* Lien vers l'historique des commandes */}
      <TouchableOpacity onPress={() => router.push("/historiqueCommande")}>
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
    height:"28%",
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
  planningCardContainer: {
    width: "90%",  // Garder une largeur de 90% de l'écran
    aspectRatio: 16 / 9,  // Garde l'aspect ratio de l'image
    justifyContent: "center",  // Centrer verticalement
    alignItems: "center",  // Centrer horizontalement
    overflow: "hidden",  // Pas de débordement de l'image
    alignSelf: "center",  // Centre le conteneur dans la vue
    marginVertical: 20,  // Ajoute un peu d'espace autour
  },
  
  planningCard: {
    width: "100%",  // Réduit la largeur de l'image (ajuster la taille)
    height: "85%",  // Réduit la hauteur de l'image (ajuster la taille)
    borderRadius: 12,  // Ajoute des coins arrondis
    overflow: "hidden",  // Pas de débordement de l'image
    justifyContent: "center",  // Centre le contenu
    alignItems: "center",  // Centre horizontalement
  },
  
  imageBackground: {
    flex: 1,  // Utilise tout l'espace disponible
    resizeMode: "contain",  // Assure que l'image garde ses proportions sans déformation
    borderRadius: 12,  // Assure les bords arrondis
  },
  
  overlay: {
    position: "absolute",  // Superpose le texte et l'icône sur l'image
    top: 0, left: 0, right: 0, bottom: 0,  // Prend toute la zone de l'image
    justifyContent: "center",  // Centre verticalement
    alignItems: "center",  // Centre horizontalement
  },
  
  calendarIcon: {
    width: 40,  // Taille de l'icône
    height: 40,  
    marginBottom: 5,  // Petit espacement sous l'icône
  },
  
  planningText: {
    fontSize: 14,  // Taille du texte
    fontWeight: "bold",  
    color: "#FFF",  // Texte en blanc
    textAlign: "center",  // Centré
  },
  
  
  
  
  
  historyText: {
    color: "#70B54D",
    textDecorationLine: "underline",
  },
});
