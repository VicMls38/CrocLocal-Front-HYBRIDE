import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";



export default function SignupScreen() {
  const [certification, setCertification] = useState("Agriculture Biologique");
  const [conditionsAccepted, setConditionsAccepted] = useState(false);
  const [isNotRobot, setIsNotRobot] = useState(false);

  const router = useRouter();


  return (
    <SafeAreaView style={styles.container}>
      {/* Titre et sous-titre */}
      <Text style={styles.title}>JE M’INSCRIS</Text>
      <Text style={styles.subtitle}>POUR CONTINUER</Text>

      {/* Formulaire d'inscription */}
      <View style={styles.form}>
        <View style={styles.row}>
          <TextInput style={styles.input} placeholder="Nom*" />
          <TextInput style={styles.input} placeholder="Prénom*" />
        </View>
        <TextInput style={styles.inputFull} placeholder="E-mail*" keyboardType="email-address" />
        <TextInput style={styles.inputFull} placeholder="Mot de passe*" secureTextEntry />
        <TextInput style={styles.inputFull} placeholder="N° SIRET*" keyboardType="numeric" />
        <TextInput style={styles.inputFull} placeholder="APE" />
        <TextInput style={styles.inputFull} placeholder="RIB*" keyboardType="numeric" />
        <TextInput style={styles.inputFull} placeholder="BIC*" />


        {/* Conditions à accepter */}
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={18}
            fillColor="#D26D34"
            unfillColor="#FFF"
            disableText={true} // Désactive le texte interne
            onPress={(isChecked: boolean) => {}}
          />
          <Text style={styles.checkboxText}>J’accepte les conditions générales</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={18}
            fillColor="#D26D34"
            unfillColor="#FFF"
            disableText={true} // Désactive le texte interne
            onPress={(isChecked: boolean) => {}}
          />
          <Text style={styles.checkboxText}>Je ne suis pas un robot</Text>
        </View>



        
        <TouchableOpacity>
          <Text style={styles.linkText}>Conditions générales</Text>
        </TouchableOpacity>

        {/* Bouton d'inscription */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Je m’inscris</Text>
        </TouchableOpacity>

        {/* Lien vers la page de connexion */}
        <TouchableOpacity onPress={() => router.push("/connexionProducteur")}>
          <Text style={styles.linkText}>Me connecter</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3D3D3D",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#7E3F27",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    width: "80%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  input: {
    width: "48%",
    height: 40,
    borderWidth: 1,
    borderColor: "#D26D34",
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: "#FFF",
  },
  inputFull: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#D26D34",
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: "#FFF",
    marginBottom: 10,
  },
  picker: {
    height: 40,
    marginBottom: 10,
    borderColor: "#D26D34",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center", // Garde le texte aligné verticalement
    marginBottom: 5,
  },
  checkboxText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 8, // Ajoute juste un petit espace entre la checkbox et le texte
  },
  linkText: {
    color: "#D26D34",
    fontSize: 14,
    textDecorationLine: "underline",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#D26D34",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
