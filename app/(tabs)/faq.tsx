import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const FAQScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        FOIRE AUX {"\n"}
        <Text style={styles.titleBold}>QUESTIONS</Text>
      </Text>
      <Text style={styles.subtitle}>
        {"\n"}Des questions ? {"\n"} Nous sommes là pour t'aider !
      </Text>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          Quels types de photos puis-je ajouter pour illustrer mes paniers ?
        </Text>
        <TouchableOpacity style={styles.icon}>
          <Text style={styles.iconText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          Comment configurer mon profil ?
        </Text>
        <TouchableOpacity style={styles.icon}>
          <Text style={styles.iconText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          Quels sont les commissions prélevées par l'application sur chaque vente ?
        </Text>
        <TouchableOpacity style={styles.icon}>
          <Text style={styles.iconText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          Comment définir le contenu d'un panier surprise ?
        </Text>
        <TouchableOpacity style={styles.icon}>
          <Text style={styles.iconText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text>{"\n"}Une question ?</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Pose ta question ici"
          placeholderTextColor="grey"
        />
      </View>

      <TouchableOpacity style={styles.btnSubmit} onPress={() => alert('Envoyé !')}>
        <Text style={styles.btnSubmitText}>Envoyer</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Besoin de plus d'informations ? Envoie un mail à contact@croclocal.fr
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  titleBold: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'flex-start',
    marginBottom: 30,
    color: '#555',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#CEDD8F',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  questionText: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    backgroundColor: '#81C784',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: '#CEDD8F',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
  btnSubmit: {
    width: '60%',
    backgroundColor: '#70B54D',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnSubmitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FAQScreen;
