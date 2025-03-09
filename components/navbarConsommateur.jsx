import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

const Navbar = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/parametresConsommateur")}>
          <Ionicons name="settings" size={24} color={"#FFF"} />
          <Text style={styles.iconText}>Paramètres</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/accueilConsommateur")}>
          <Ionicons name="home" size={24} color={"#FFF"} />
          <Text style={styles.iconText}>Accueil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/conseils")}>
          <Ionicons name="help-circle" size={24} color={"#FFF"} />
          <Text style={styles.iconText}>Conseils</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  wrapper: {
    width: "95%",
    height: 65,
    backgroundColor: "#70B54D",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 16,
    paddingHorizontal: 20, // 🔹 Ajout d'un padding horizontal pour éviter les bords collés
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  navItem: {
    flex: 1, // 🔹 Permet un espacement égal
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    color: "#FFF",
    fontSize: 12,
    marginTop: 4, // 🔹 Espacement uniforme entre icône et texte
    textAlign: "center",
  },
});

export default Navbar;
