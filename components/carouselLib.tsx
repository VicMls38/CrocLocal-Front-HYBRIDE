import React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // 📌 Pour les étoiles (nécessite expo-vector-icons)

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.7;
const SPACING = 10;

const reviews = [
  { date: '26/04/2021', text: 'Un peu trop cher.', rating: 3, name: 'Jean Dupont' },
  { date: '18/05/2021', text: 'Petite cueillette ce matin, explications données. Très jolis légumes à un bon prix.', rating: 5, name: 'Marie Lemoine' },
  { date: '01/06/2021', text: 'Produits frais et locaux, personnel accueillant.', rating: 4, name: 'Pierre Durand' }
];

const CarouselLib = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        pagingEnabled
        snapToInterval={ITEM_WIDTH + SPACING * 2}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        {reviews.map((review, index) => (
          <View key={index} style={styles.card}>
            {/* 📅 Date en haut */}
            <Text style={styles.date}>Publié le {review.date}</Text>

            {/* ⭐ Étoiles en haut à gauche */}
            <View style={styles.rating}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <FontAwesome key={i} name="star" size={16} color="#f4c542" />
              ))}
            </View>

            {/* 📝 Avis centré horizontalement et verticalement */}
            <View style={styles.textContainer}>
              <Text style={styles.text}>{review.text}</Text>
            </View>

            {/* 👤 Prénom Nom en bas à gauche */}
            <Text style={styles.name}>{review.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
  },
  scrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: (width - ITEM_WIDTH) / 2,
    marginVertical: 30,
  },
  card: {
    width: ITEM_WIDTH,
    height: 200,
    backgroundColor: '#D6E4A3', // ✅ Fond vert clair
    borderRadius: 15,
    padding: 15,
    marginHorizontal: SPACING,
    justifyContent: 'space-between',
    position: 'relative', // Pour gérer la position des éléments
  },
  date: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
  rating: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center', // Centrer verticalement
    alignItems: 'center', // Centrer horizontalement
    marginTop: 20, // Pour espacer le texte des étoiles
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  name: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CarouselLib;
