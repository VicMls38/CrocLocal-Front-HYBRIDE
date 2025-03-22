import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import Navbar from "@/components/navbarConsommateur"; 

const { width } = Dimensions.get('window');
const cardWidth = width * 0.42; // Taille de chaque carte
const cardMargin = 8; // Marge entre les cartes

export default function FavorisScreen() {

    const router = useRouter();

  // Données d'exemple pour les favoris, maintenant avec des chemins d'images
  const favoris = [
    { 
      id: 1, 
      nom: 'Chez Salade', 
      image: require('@/assets/images/imageTest.png') // Chemin vers l'image
    },
    { 
      id: 2, 
      nom: 'Les jardins du Coteau', 
      image: require('@/assets/images/imageTest.png')
    },
    { 
      id: 3, 
      nom: 'La Ferme Bio', 
      image: require('@/assets/images/imageTest.png')
    },
    { 
      id: 4, 
      nom: 'Primeur Local', 
      image: require('@/assets/images/imageTest.png')
    },
    { 
      id: 5, 
      nom: 'Panier Fermier', 
      image: require('@/assets/images/imageTest.png') 
    },
    { 
      id: 6, 
      nom: 'Au Petit Marché', 
      image: require('@/assets/images/imageTest.png')
    },
  ];

  return (
    <View style={styles.container}>
      {/* Titre */}
      <Text style={styles.titre}>
        TES COUPS DE <Text style={styles.titreGras}>COEUR</Text>
      </Text>

      {/* Sous-titre */}
      <Text style={styles.sousTitre}>
        Découvre les produits locaux que tu aimes{"\n"}
        et garde-les en tête pour tes futurs achats !
      </Text>

      {/* Défilement horizontal des favoris */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        style={styles.carouselContainer}
      >
        {favoris.map((favori) => (
          <TouchableOpacity key={favori.id} style={styles.cardContainer} onPress={() => router.push("/fichePersoProducteurForConsommateur")}>
            <View style={styles.card}>
              {/* Image de fond */}
              <Image source={favori.image} style={styles.cardImage} />
              
              {/* Overlay pour assurer la lisibilité du texte */}
              <View style={styles.cardOverlay}>
                <Text style={styles.cardNom}>{favori.nom}</Text>
              </View>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardNomBottom}>{favori.nom}</Text>
              <Ionicons name="heart" size={18} color="red" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Navbar></Navbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  titre: {
    fontSize: 24,
    fontWeight: '500',
    color: '#424242',
    marginBottom: 8,
  },
  titreGras: {
    fontWeight: '900',
    color: '#4A2B40',
  },
  sousTitre: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 24,
    lineHeight: 20,
  },
  carouselContainer: {
    marginTop: 10,
  },
  scrollContainer: {
    paddingRight: 16, // Espace supplémentaire à la fin du défilement
  },
  cardContainer: {
    width: cardWidth,
    marginRight: cardMargin,
    marginBottom: 8,
  },
  card: {
    height: 380,
    borderRadius: 12,
    overflow: 'hidden', // Assure que l'image respecte les bords arrondis
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative', // Pour positionner l'overlay correctement
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // L'image couvre tout l'espace sans déformation
  },
  cardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Overlay semi-transparent pour assurer la lisibilité
  },
  cardNom: {
    fontSize: 16,
    fontWeight: '700',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    color: '#424242',
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  cardNomBottom: {
    fontSize: 14,
    color: '#424242',
  },
});