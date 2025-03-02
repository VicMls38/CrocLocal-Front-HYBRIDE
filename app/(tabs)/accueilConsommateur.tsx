import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";

export default function HomeScreen() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Titre */}
      <Text style={styles.title}>Bienvenue</Text>
      <Text style={styles.subtitle}>Découvre et achete les meilleurs produits locaux auprès des producteurs près de chez toi. Fraîcheur, qualité et circuit court à portée de clic ! 🛒🥕🍞</Text>
      
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
              <Text style={styles.cardText}>Suivi de commande</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.flexPosition}>
          {/* Avis */}
          <TouchableOpacity style={styles.cardColored} onPress={() => router.push("/avisProducteur")}>
            <Image source={require('@/assets/images/basket_historique.png')} style={styles.image} />
            <Text style={styles.cardText}>Historique des commandes</Text>
          </TouchableOpacity>

          {/* Paramètres */}
          <TouchableOpacity style={styles.cardColored} onPress={() => router.push("/parametres")}>
            <Image source={require('@/assets/images/settings.png')} style={styles.image} />
            <Text style={styles.cardText}>Paramètres</Text>
          </TouchableOpacity>
        </View>

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
    paddingRight: 10,
    paddingLeft: 10,
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
    justifyContent: 'space-between',
    width: '100%',
  },
  flexPosition:{
    flexDirection: 'column',
    width: '48%',
    height: 430,
  },
  card: {
    width: '48%',
    height: 430,
    borderRadius: 10,
    overflow: 'hidden', // Empêche tout débordement de l'image
  },
  cardColored: {
    width: '100%',
    height: 200,
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
    width: 80,
    height: 80,
    resizeMode: 'contain', // Assure que l'image ne soit pas coupée
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  cardText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'black',
  },
  carotte: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
});
