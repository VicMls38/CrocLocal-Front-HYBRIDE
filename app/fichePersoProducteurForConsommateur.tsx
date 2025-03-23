import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from '@expo/vector-icons';
import Navbar from "@/components/navbarConsommateur"; 



const FichePublique = () => {

  const router = useRouter();

  const [activeTab, setActiveTab] = useState('Informations');

  // State to track if the heart is favorite (red) or not (gray)
  const [isFavorite, setIsFavorite] = useState(false);

  // Toggle favorite state
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/wishlist")}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        {/* Heart button that toggles color */}
        <TouchableOpacity onPress={toggleFavorite}>
          <Ionicons 
            name="heart" 
            size={24} 
            color={isFavorite ? "red" : "gray"} 
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>FICHE PUBLIQUE</Text>

      <View style={styles.profileContainer}>
        <View style={styles.modifySection}>

        </View>
        <Image
          source={require('@/assets/images/fichePerso.png')}
          style={styles.profileImage}
        />
        <View style={styles.modifySection}>
          <Text style={styles.name}>{"\n"}Chez Saladé</Text>
        </View>
        <View style={styles.modifySection}>
          <Text style={styles.description}>
            Découvrez les trésors cachés de nos producteurs et recettes sur place,
            dans une démarche bio !
          </Text>
        </View>

      </View>

      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.infoButton}>
          <Image
            source={require('@/assets/images/mailBtn.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Image
            source={require('@/assets/images/mapsBtn.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Image
            source={require('@/assets/images/telBtn.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.infoTextContainer}>
        <TouchableOpacity onPress={() => setActiveTab('Informations')}>
          <Text style={[styles.infoText, activeTab === 'Informations' && styles.activeTab]}>
            Informations du producteur
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Avis')}>
          <Text style={[styles.infoText, activeTab === 'Avis' && styles.activeTab]}>
            Avis
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Informations' && (
        <View>
          <View style={styles.sectionContainer}>
            <View style={styles.hoursHeader}>
              <Text style={styles.sectionTitle}>Tes productions</Text>
            </View>
            <View style={styles.productionContainer}>
              <View style={styles.productionItem}>
                <Image
                  source={require('@/assets/images/produitFrais.png')}
                  style={styles.productionImage}
                />
                <Text style={styles.productionText}>Produits frais</Text>
              </View>
              <View style={styles.productionItem}>
                <Image
                  source={require('@/assets/images/produitTransforme.png')}
                  style={styles.productionImage}
                />
                <Text style={styles.productionText}>Produits {"\n"} transformés</Text>
              </View>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.sectionContainer}>
            <View style={styles.hoursHeader}>
              <Text style={styles.sectionTitle}>Tes certifications</Text>
            </View>
            <View style={styles.certificationContainer}>
              <Image
                source={require('@/assets/images/certifBio.png')}
                style={styles.certificationImage}
              />
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.sectionContainer}>
            <View style={styles.hoursHeader}>
              <Text style={styles.sectionTitle}>Vos horaires</Text>
            </View>
            <View style={styles.hoursContainer}>
              <Text style={styles.hoursLabel}>Mardi à vendredi</Text>
              <Text style={styles.hoursValue}>10h00 | 18h00</Text>
            </View>
          </View>
        </View>
      )}

      {activeTab === 'Avis' && (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Avis des clients</Text>
          {/* Ajoutez ici le contenu pour l'onglet Avis */}
          <Text>Contenu des avis...</Text>
        </View>
      )}

      {/* Pay Button */}
      <TouchableOpacity style={styles.payButton} onPress={() => router.push("/choisiTonPanierConsommateur")}>
        <Text style={styles.payButtonText}>Choisir ce Producteur</Text>
      </TouchableOpacity>
      
    </ScrollView>
    <Navbar></Navbar>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginBottom:50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: '100%',
    height: 170,
    aspectRatio: 1, // Maintain aspect ratio
    borderRadius: 16,
    marginBottom: 20,
  },
  modifySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionContainer: {
    width: '80%',
    alignSelf: 'center',  // Centre horizontalement
    justifyContent: 'center',  // Centre verticalement
    textAlign: 'center',  // Centrer le texte
    marginBottom: 20,  // Espacement sous la description
    position: 'relative',  // Permet de positionner le bouton "Modifier" par rapport à ce conteneur
  },
  
  description: {
    fontSize: 16,  // Taille du texte
    marginBottom: 20,  // Espacement sous la description
    lineHeight: 24,  // Ajuste la hauteur de ligne pour rendre le texte plus lisible
  },  
  payButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 16,
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  

  
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoButton: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  buttonImage: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },
  infoTextContainer: {
    flexDirection: 'row', // Aligner les textes horizontalement
    justifyContent: 'space-between', // Espacer les textes
    marginTop: 10, // Ajuster l'espacement au-dessus
    marginBottom: 30, // Ajuster l'espacement en dessous
  },
  infoText: {
    fontSize: 16, // Taille de la police
    color: '#333', // Couleur du texte
    textAlign: 'center', // Centrer le texte
    textDecorationLine: 'underline', // Souligner le texte
    textDecorationColor: '#CEDD8F', // Couleur du soulignement
  },
  activeTab: {
    fontWeight: 'bold', // Mettre en gras le texte de l'onglet actif
  },
  separator: {
    height: 2, // Hauteur de la ligne
    backgroundColor: '#CEDD8F', // Couleur de la ligne
    marginVertical: 15, // Espacement vertical
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Espacement uniforme entre les éléments
    alignItems: 'center',
    width: '100%', // S'assurer que la section prend toute la largeur
    paddingHorizontal: 20, // Ajouter un padding pour éviter que les éléments touchent les bords
  },
  productionItem: {
    flex: 1, // Permet un espacement égal entre les items
    alignItems: 'center',
  },
  productionImage: {
    width: 60, // Taille fixe pour uniformiser
    height: 60,
    resizeMode: 'contain',
  },
  productionText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    flexWrap: 'wrap', // S'assurer que le texte s'affiche correctement
  },
  
  certificationContainer: {
    alignItems: 'flex-start',
  },
  certificationImage: {
    width: 50,
    height: 50,
  },
  hoursHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modifyButton: {
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 5,
    position: 'absolute', // Position absolue pour le bouton
    top: 0, // Positionner en haut
    right: 0, // Positionner à droite
  },
  modifyButtonText: {
    fontSize: 14,
    color: '#555',
  },
  hoursContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:50,
  },
  hoursLabel: {
    fontSize: 14,
  },
  hoursValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FichePublique;
