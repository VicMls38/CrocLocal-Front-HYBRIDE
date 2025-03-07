import React from 'react';
import { Platform, SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CarouselLib from '@/components/carouselLib';
import Icon from "react-native-vector-icons/Ionicons";
import { useRouter } from "expo-router";


export default function HomeScreen() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => router.push("/accueilProducteur")}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      </View>
      
      <Image source={require('@/assets/images/stars.png')} style={styles.stars} />

      <Text style={styles.title}>{"\n\n Tes derniers avis"}</Text>

      {/* ✅ Wrapper pour éviter le décalage */}
      <View style={styles.carouselWrapper}>
        <CarouselLib />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Je réponds</Text>
      </TouchableOpacity>

      <Text style={styles.souligneText}>Voir tous mes avis</Text>

      <Image style={styles.carotte} source={require('@/assets/images/carotte.png')} />
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
    marginBottom: 10,
  },
  carouselWrapper: {
    width: '100%', 
    alignItems: 'center', // ✅ Centre bien le carousel
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#D26D34",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  souligneText: {
    textDecorationLine: 'underline',
  },
  carotte: {
    marginTop: 15,
    width: 150, // 🔹 Réduit la largeur
    height: 150, // 🔹 Réduit la hauteur
    resizeMode: 'contain', // ✅ Assure un bon rendu sans déformation
  },
});

