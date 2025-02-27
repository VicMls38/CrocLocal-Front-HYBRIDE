import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface CommandHistoryItem {
  name: string;
  items: string;
  price: string;
  date: string;
  status: string;
}

const commandHistory: CommandHistoryItem[] = [
  { name: 'MME. RUIZ', items: '1 panier M', price: '19.99€', date: '25 nov.', status:'Terminée',  afficher: 'Afficher' },
  { name: 'M. DUMAS', items: '1 panier S', price: '12.99€', date: '25 nov.', status:'Terminée', afficher: 'Afficher' },
  { name: 'MME. LAPIERRE', items: '1 panier M', price: '19.99€', date: '25 nov.', status:'Terminée', afficher: 'Afficher' },
  { name: 'MME. SMITH', items: '1 panier L', price: '29.99€', date: '23 nov.', status:'Terminée', afficher: 'Afficher' },
  { name: 'M. FONG', items: '1 abonnement M', price: '49.99€', date: '23 nov.', status:'Terminée', afficher: 'Afficher' },
  { name: 'MME. AINSAID', items: '1 abonnement M', price: '49.99€', date: '21 nov.', status:'Terminée', afficher: 'Afficher' },
];

const App = () => {
  const renderItem = ({ item }: { item: CommandHistoryItem }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.items}>{item.items}</Text>
        {item.price && <Text style={styles.price}>{item.price}</Text>}
      </View>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.status}>{item.status}</Text>
      <TouchableOpacity>
      <Text style={styles.afficher}>{item.afficher}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HISTORIQUE {"\n"}DE COMMANDE</Text>
      <FlatList
        data={commandHistory}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'column',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F3CFB6',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  items: {
    flex: 1,
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: '#FF5733',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  afficher: {
    fontSize: 16,
    textAlign: 'right',
    color: '#007BFF',
  },
});

export default App;
