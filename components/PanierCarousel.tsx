import React from "react";
import { View, Text, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Import de l'icône validée

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.7;
const SPACING = 10;

const orders = [
  { id: "1", status: "", title: "Paniers S\n12.99€", image: require("@/assets/images/panier_s.png"), selection: true },
  { id: "2", status: "", title: "Paniers M\n19.99€", image: require("@/assets/images/panier_m.png"), selection: false },
  { id: "3", status: "", title: "Paniers L\n23.99€", image: require("@/assets/images/panier_l.png"), selection: false },
];

const PanierCarousel = () => {
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
        {orders.map((order, index) => (
        <TouchableOpacity>
          <View key={index} style={styles.card}>
            {/* 🔹 Statut de la commande */}
            <View style={styles.statusWrapper}>
              <Text style={[styles.status, { color: getStatusColor(order.status) }]}>{order.status}</Text>
              {order.selection === true && <Icon name="checkmark-circle" size={20} color="#70B54D" />}
            </View>

            {/* 📸 Image du panier */}
            <Image source={order.image} style={styles.image} />

            {/* 📦 Titre de la commande */}
            <Text style={styles.title}>{order.title}</Text>
          </View>
        </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

// Fonction pour déterminer la couleur du texte selon le statut
const getStatusColor = (status: string) => {
  switch (status) {
    case "Prête":
      return "#4CAF50"; // Vert pour "Prête"
    case "À préparer":
      return "#FF9800"; // Orange pour "À préparer"
    case "Prise":
      return "#2196F3"; // Bleu pour "Prise"
    default:
      return "#000"; // Couleur par défaut
  }
};

// 🎨 Styles
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },
  scrollContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: (width - ITEM_WIDTH) / 2,
    marginVertical: 30,
  },
  card: {
    width: ITEM_WIDTH,
    height: 180,
    backgroundColor: "#E8F5C8", // ✅ Fond vert clair
    borderRadius: 15,
    padding: 15,
    marginHorizontal: SPACING,
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
  },
  image: {
    width: 60,
    height: 60,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default PanierCarousel;
