import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from "expo-router";



const TabTwoScreen = () => {
  const [collapsedSections, setCollapsedSections] = useState({
    profile: true,
    publicPage: true,
    password: true,
    accountManagement: true,
    salesConditions: true,
    usageConditions: true,
  });

  const toggleSection = (section: string) => {
    setCollapsedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/accueilProducteur")}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>TES PARAMÈTRES</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Information sur le profil</Text>
        <TouchableOpacity onPress={() => toggleSection('profile')} style={styles.sectionItem}>
          <View style={styles.sectionItemContent}>
            <Icon name="person-circle" size={24} color="#4CAF50" />
            <Text style={styles.sectionItemText}>Profil</Text>
          </View>
          <Icon
            name={collapsedSections.profile ? 'chevron-forward' : 'chevron-down'}
            size={24}
            color="#4CAF50"
          />
        </TouchableOpacity>
        {!collapsedSections.profile && (
          <Text style={styles.sectionDescription}>
            Modifier les informations personnelles
          </Text>
        )}

        <TouchableOpacity  onPress={() => router.push("/fichePersoProducteur")} style={styles.sectionItem}>
          <View style={styles.sectionItemContent}>
            <Icon name="globe" size={24} color="#4CAF50" />
            <Text style={styles.sectionItemText}>Page publique</Text>
          </View>
          <Icon
            name={collapsedSections.publicPage ? 'chevron-forward' : 'chevron-down'}
            size={24}
            color="#4CAF50"
          />
        </TouchableOpacity>
        {!collapsedSections.publicPage && (
          <Text style={styles.sectionDescription}>
            Gérer la page publique
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Connexion et sécurité</Text>
        <TouchableOpacity onPress={() => toggleSection('password')} style={styles.sectionItem}>
          <View style={styles.sectionItemContent}>
            <Icon name="lock-closed" size={24} color="#4CAF50" />
            <Text style={styles.sectionItemText}>Modifier le mot de passe</Text>
          </View>
          <Icon
            name={collapsedSections.password ? 'chevron-forward' : 'chevron-down'}
            size={24}
            color="#4CAF50"
          />
        </TouchableOpacity>
        {!collapsedSections.password && (
          <Text style={styles.sectionDescription}>
            Modifier le mot de passe
          </Text>
        )}

        <TouchableOpacity onPress={() => toggleSection('accountManagement')} style={styles.sectionItem}>
          <View style={styles.sectionItemContent}>
            <Icon name="person" size={24} color="#4CAF50" />
            <Text style={styles.sectionItemText}>Gestion du compte</Text>
          </View>
          <Icon
            name={collapsedSections.accountManagement ? 'chevron-forward' : 'chevron-down'}
            size={24}
            color="#4CAF50"
          />
        </TouchableOpacity>
        {!collapsedSections.accountManagement && (
          <Text style={styles.sectionDescription}>
            Gérer le compte
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conditions générales</Text>
        <TouchableOpacity onPress={() => toggleSection('salesConditions')} style={styles.sectionItem}>
          <View style={styles.sectionItemContent}>
            <Icon name="document-text" size={24} color="#4CAF50" />
            <Text style={styles.sectionItemText}>Conditions générales de vente</Text>
          </View>
          <Icon
            name={collapsedSections.salesConditions ? 'chevron-forward' : 'chevron-down'}
            size={24}
            color="#4CAF50"
          />
        </TouchableOpacity>
        {!collapsedSections.salesConditions && (
          <Text style={styles.sectionDescription}>
            Conditions générales de vente
          </Text>
        )}

        <TouchableOpacity onPress={() => toggleSection('usageConditions')} style={styles.sectionItem}>
          <View style={styles.sectionItemContent}>
            <Icon name="document-text" size={24} color="#4CAF50" />
            <Text style={styles.sectionItemText}>Conditions générales d'utilisation</Text>
          </View>
          <Icon
            name={collapsedSections.usageConditions ? 'chevron-forward' : 'chevron-down'}
            size={24}
            color="#4CAF50"
          />
        </TouchableOpacity>
        {!collapsedSections.usageConditions && (
          <Text style={styles.sectionDescription}>
            Conditions générales d'utilisation
          </Text>
        )}
      </View>

      <View style={styles.footer}>
        <Image
          source={require("@/assets/images/carotte.png")} style={styles.carotte} // Remplacez par le chemin de votre image
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    marginTop: 30,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  sectionItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionItemText: {
    marginLeft: 10,
    fontSize: 16,
  },
  sectionDescription: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  carotte: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginTop: 10,
  },
});

export default TabTwoScreen;
