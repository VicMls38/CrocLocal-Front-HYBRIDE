import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";

const Navbar = () => {

  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => router.push("/parametres")}>
        <Ionicons name="settings" size={24} color={"#FFF"} />
        <Text style={styles.iconText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/accueilProducteur")}>
        <Ionicons name="home" size={24} color={"#FFF"} />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/faq")}>
        <Ionicons name="help-circle" size={24} color={"#FFF"} />
        <Text style={styles.iconText}>Faq</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#70B54D",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    borderRadius: 16, // Correction du nom de la propriété
  },
  iconText: {
    color: "#FFF",
    fontSize: 12,
  }
});

export default Navbar;
