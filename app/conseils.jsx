import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";
import Navbar from "@/components/navbarConsommateur"; 

export default function ConseilsScreen() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Titre */}
      <Text style={styles.title}>CONSEILS</Text>
      <Text style={styles.subtitle}>
        Découvre des recettes, des astuces nature et des conseils. Inspire-toi et adopte un mode de vie plus sain et durable !
      </Text>

      {/* Image principale */}
      <Image source={require('@/assets/images/conseils_image.png')} style={styles.mainImage} />

      {/* Catégories */}
      <Text style={styles.categoriesTitle}>Catégories</Text>
      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={styles.categoryButton} onPress={() => router.push('/recettes')}>
          <Image source={require('@/assets/images/recettes.png')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Recettes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton} onPress={() => router.push('/tips')}>
          <Image source={require('@/assets/images/tips.png')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Tips</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton} onPress={() => router.push('/ecogestes')}>
          <Image source={require('@/assets/images/ecogestes.png')} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Écogestes</Text>
        </TouchableOpacity>
      </View>
      <Navbar></Navbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#3D2935',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#3D2935',
    paddingHorizontal: 15,
  },
  mainImage: {
    width: '90%',
    height: 180,
    marginTop: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  categoriesTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  categoryButton: {
    alignItems: 'center',
    
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
    color: '#3D2935',
    textAlign: 'center',
  },
});
