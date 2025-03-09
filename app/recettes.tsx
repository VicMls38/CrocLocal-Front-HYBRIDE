import React from 'react';
import { SafeAreaView, View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from "@/components/navbarConsommateur"; 

export default function RecettesPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TES IDÉES RECETTES</Text>
      <Text style={styles.subtitle}>DE SAISON</Text>

      {/* Barre de recherche et filtre */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher une recette"
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Text>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterIcon}>
          <Text>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Liste horizontale de recettes */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recipeScroll}>
        {['ratatouille', 'salade_cesar', 'poulet_haricots', 'soupe'].map((recette, index) => (
          <View key={index} style={styles.recipeCard}>
            <Image source={{ uri: `https://via.placeholder.com/100?text=${recette}` }} style={styles.recipeImage} />
            <Text style={styles.recipeText}>{recette.replace('_', ' ')}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Bloc Newsletter */}
      <View style={styles.newsletterContainer}>
        <Text style={styles.newsletterTitle}>TIENS TOI AU JUS !</Text>
        <TextInput
          style={styles.inputFull}
          placeholder="Laisse ton e-mail"
          keyboardType="email-address"
        />
        <View style={styles.checkboxContainer}>
          <Text>✅ J'accepte de m'inscrire à la newsletter</Text>
        </View>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Je m'abonne</Text>
        </TouchableOpacity>
        <Image source={{ uri: 'https://via.placeholder.com/50?text=🥕' }} style={styles.carrotImage} />
      </View>
      <Navbar></Navbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 20, fontWeight: 'bold', color: '#6C4F63' },
  searchContainer: { flexDirection: 'row', marginVertical: 15 },
  searchInput: { flex: 1, borderColor: '#ccc', borderWidth: 1, borderRadius: 10, padding: 8 },
  searchIcon: { padding: 10, marginLeft: 8, backgroundColor: '#C8E6C9', borderRadius: 10 },
  filterIcon: { padding: 10, marginLeft: 8, backgroundColor: '#AED581', borderRadius: 10 },
  recipeScroll: { marginBottom: 20 },
  recipeCard: { width: 100, marginRight: 15, alignItems: 'center' },
  recipeImage: { width: 100, height: 100, borderRadius: 10 },
  recipeText: { textAlign: 'center', marginTop: 5 },
  newsletterContainer: { backgroundColor: '#F3CFB6', borderRadius: 10, padding: 20, marginTop: 20 },
  newsletterTitle: { fontWeight: 'bold', marginBottom: 10 },
  inputFull: { backgroundColor: '#FFF', borderRadius: 8, padding: 10, marginBottom: 10 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  subscribeButton: { backgroundColor: '#FF7043', padding: 10, borderRadius: 10, alignItems: 'center' },
  subscribeButtonText: { color: '#FFF', fontWeight: 'bold' },
  carrotImage: { width: 50, height: 50, position: 'absolute', bottom: -10, right: 10 },
});
