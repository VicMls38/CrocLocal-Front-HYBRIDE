import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";

import { useRouter } from "expo-router";

export default function LoginScreen() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  

  const handleLogin = () => {
    console.log("Connexion avec :", email, password);
    // Ajouter ici l'appel à une API de connexion
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("@/assets/images/header_croque.png")} style={styles.header}>
        <Text style={styles.title}>Connexion</Text>
      </ImageBackground>

      <Text style={styles.description}>
        Vends tes produits directement à des clients engagés, près de chez toi !
      </Text>

      <TextInput
        style={styles.input}
        placeholder="e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="mot de passe"
          secureTextEntry={secureTextEntry}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <Text style={styles.showPassword}>{secureTextEntry ? "👁️" : "🙈"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/accueilProducteur")}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.linkText}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/inscriptionProducteur")}>
        <Text style={styles.registerText}>
          Je n'ai pas de compte : <Text style={styles.linkText}>m'inscrire</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    paddingTop: 20,
  },
  header: {
    width: "90%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3D3D3D",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
    marginHorizontal: 30,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: "#FFF",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
  showPassword: {
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#D26D34",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    color: "#D26D34",
    fontSize: 14,
    fontWeight: "500",
    textDecorationLine: "underline",
    marginTop: 10,
  },
  registerText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
});

