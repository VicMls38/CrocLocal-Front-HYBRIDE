import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Navbar from "@/components/navbarConsommateur"; 

export default function RecipesScreen() {
  // États pour les éléments interactifs
  const [searchText, setSearchText] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [filterPressed, setFilterPressed] = useState(false);
  
  // Fonction pour gérer la pression sur le bouton filtre
  const handleFilterPress = () => {
    // Ajoutez votre logique de filtrage ici
    console.log("Bouton filtre pressé");
  };

  // Données pour les recettes - vous pouvez en ajouter autant que vous voulez
  const recipes = [
    { id: '1', title: 'Poulet et haricot verts', image: require('@/assets/images/ecogestes/batiment_vert.png') },
    { id: '2', title: 'Salade César', image: require('@/assets/images/ecogestes/course_eco.png') },
    { id: '3', title: 'Soupe', image: require('@/assets/images/ecogestes/velo_eco.png') },
    { id: '1', title: 'Poulet et haricot verts', image: require('@/assets/images/ecogestes/batiment_vert.png') },
    { id: '2', title: 'Salade César', image: require('@/assets/images/ecogestes/course_eco.png') },
    { id: '3', title: 'Soupe', image: require('@/assets/images/ecogestes/velo_eco.png') },
    // Ajoutez autant de recettes que vous voulez ici
  ];

  // Rendu d'un élément de recette
  const renderRecipeItem = ({ item }) => (
    <TouchableOpacity style={styles.recipeItem} onPress={() => {/* Navigation vers la recette */}}>
      <Image source={item.image} style={styles.recipeImage} />
      <Text style={styles.recipeText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      {/* Contenu scrollable (tout sauf la navbar) */}
      <ScrollView style={styles.scrollContent}>
        {/* Title Section */}
        <View style={styles.titleContainer}>
          <Text style={styles.subtitle}>ICI RETROUVE</Text>
          <Text style={styles.title}>TES ÉCOGESTES</Text>
        </View>
        
        {/* Search Bar - Corrigée pour être interactive */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Rechercher..."
              placeholderTextColor="#888"
              value={searchText}
              onChangeText={setSearchText}
            />
            <Ionicons name="search-outline" size={20} color="#8BC34A" />
          </View>
          <TouchableOpacity 
            style={[
              styles.filterButton,
              filterPressed && styles.filterButtonPressed
            ]}
            onPress={handleFilterPress}
            onPressIn={() => setFilterPressed(true)}
            onPressOut={() => setFilterPressed(false)}
            activeOpacity={0.7}
          >
            <Ionicons name="options-outline" size={20} color="#8BC34A" />
          </TouchableOpacity>
        </View>
        
        {/* Liste horizontale défilante de recettes */}
        <FlatList
          data={recipes}
          renderItem={renderRecipeItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recipeListContainer}
        />
        
        {/* Newsletter Section - Checkbox corrigée */}
        <ImageBackground 
          source={require('@/assets/images/fond-croque.png')} 
          style={styles.newsletterContainer}
          resizeMode="cover"
        >
          <View style={styles.newsletterContent}>
            <Text style={styles.newsletterTitle}>TIENS-TOI AU JUS !</Text>
            
            <Text style={styles.newsletterLabel}>Adresse e-mail:</Text>
            <TextInput
              style={styles.newsletterInput}
              placeholder="Entre ton e-mail"
              placeholderTextColor="#888"
            />
            
            <View style={styles.checkboxRow}>
              <TouchableOpacity 
                style={[styles.checkbox, isChecked && styles.checkboxChecked]} 
                onPress={() => setIsChecked(!isChecked)}
              >
                {isChecked && <Ionicons name="checkmark" size={14} color="#fff" />}
              </TouchableOpacity>
              <Text style={styles.checkboxText}>
              J’accepte de m’inscrire à la newsletter et de recevoir un mail par semaine de la part de Croc’Local
              </Text>
            </View>
            
            <TouchableOpacity style={styles.subscribeButton}>
              <Text style={styles.subscribeButtonText}>Je m'abonne</Text>
            </TouchableOpacity>
          </View>
          
          <Image 
            source={require('@/assets/images/carotte.png')} 
            style={styles.carrotImage} 
          />
        </ImageBackground>
      </ScrollView>
      
      {/* Navbar (fixée en bas) */}
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  titleContainer: {
    paddingHorizontal: 16,
    marginTop: 5,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 10,
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  searchInput: {
    flex: 1,
    color: '#333',
  },
  searchPlaceholder: {
    color: '#888',
  },
  filterButton: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  recipeListContainer: {
    paddingLeft: 16,
    paddingRight: 8,
    paddingVertical: 10,
  },
  recipeItem: {
    marginRight: 12,
    width: 140,
    alignItems: 'center',
  },
  recipeImage: {
    width: 140,
    height: 140,
    borderRadius: 12,
  },
  recipeText: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    maxWidth: 140,
  },
  newsletterContainer: {
    height: 280,
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 20,
    marginBottom: 20, // Ajouté un peu d'espace pour éviter que la newsletter soit trop près de la navbar
  },
  newsletterContent: {
    marginRight: 80,
  },
  newsletterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  newsletterLabel: {
    fontSize: 14,
    marginBottom: 6,
    color: '#333',
  },
  newsletterInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 14,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#888',
    backgroundColor: '#fff',
    marginRight: 8,
    marginTop: 2,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#8BC34A',
    borderColor: '#8BC34A',
  },
  checkboxText: {
    flex: 1,
    fontSize: 12,
    color: '#333',
    lineHeight: 16,
  },
  subscribeButton: {
    backgroundColor: '#E25822',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 5,
  },
  subscribeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  carrotImage: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    width: 80,
    height: 200,
    zIndex: 1,
  },
  filterButtonPressed: {
    backgroundColor: 'black', // Une couleur grise claire
  },
});