import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";

export default function HomeScreen() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Titre */}
      <Text style={styles.title}>Bienvenue sur notre {'\n'} marketplace !</Text>
      <Text style={styles.subtitle}>Vends tes produits locaux en direct aux consommateurs proches de chez toi !</Text>
      
      {/* Grille de cartes */}
      <View style={styles.gridContainer}>
        
        {/* Commandes (image en fond, sans couleur de fond) */}
        <TouchableOpacity style={styles.card} onPress={() => router.push("/AccueilCommandesProducteur")}>
          <ImageBackground 
            source={require('@/assets/images/commande_croque.png')}  
            style={styles.imageBackground} 
            imageStyle={{ borderRadius: 10 }}
          >
            <View style={styles.overlay}>
              <Image source={require('@/assets/images/basket.png')} style={styles.icon} />
              <Text style={styles.cardText}>Vos commandes de la semaine</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        {/* Avis */}
        <TouchableOpacity style={styles.cardColored} onPress={() => router.push("/avisProducteur")}>
          <Image source={require('@/assets/images/stars.png')} style={styles.image} />
          <Text style={styles.cardText}>Voir mes avis</Text>
        </TouchableOpacity>

        {/* CrocLocal+ */}
        <TouchableOpacity style={styles.cardColored}>
          <Image source={require('@/assets/images/splash-icon.png')} style={styles.image} />
          <Text style={styles.cardText}>CROCLOCAL+</Text>
        </TouchableOpacity>

        {/* Paramètres */}
        <TouchableOpacity style={styles.cardColored} onPress={() => router.push("/parametres")}>
          <Image source={require('@/assets/images/settings.png')} style={styles.image} />
          <Text style={styles.cardText}>Paramètres</Text>
        </TouchableOpacity>

      </View>

      {/* Carotte en bas */}
      <Image source={require('@/assets/images/carotte_panier.png')} style={styles.carotte} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
  },
  card: {
    width: '45%',
    height: 130,
    borderRadius: 10,
    overflow: 'hidden', // Empêche tout débordement de l'image
  },
  cardColored: {
    width: '45%',
    height: 130,
    backgroundColor: '#CEDD8F',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain', // Assure que l'image ne soit pas coupée
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  cardText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
  carotte: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 20,
  },
});
