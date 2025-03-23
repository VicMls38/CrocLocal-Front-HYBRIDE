import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Navbar from "@/components/navbarConsommateur"; 
import { router } from 'expo-router';

const CartPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>TON <Text style={styles.headerTitleBold}>PANIER</Text></Text>
      </View>

      {/* Cart Item */}
      <View style={styles.cartItem}>
        <View style={styles.cartItemLeft}>
          {/* Utiliser l'icône de panier d'Ionicons */}
          <View style={styles.bagIconContainer}>
            <Image 
                source={require('@/assets/images/bag-icon.png')} 
                style={styles.bagIcon}
            />
          </View>
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>Panier S - Chez Salade</Text>
            <Text style={styles.itemSubtitle}>Prix Unité</Text>
            <Text style={styles.itemDate}>À récupérer le 18/06/2025 à 14h30</Text>
            <Text style={styles.itemModified}>Modifié</Text>
          </View>
        </View>
        <View style={styles.cartItemRight}>
          <Text style={styles.itemPrice}>12.99€</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>1</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Delete Cart Button */}
      <TouchableOpacity style={styles.deleteButton}>
        <Icon name="trash-outline" size={18} color="#666" style={styles.trashIcon} />
        <Text style={styles.deleteText}>Vider mon panier</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Summary */}
      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Sous total</Text>
          <Text style={styles.summaryValue}>12.28€</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>TVA</Text>
          <Text style={styles.summaryValue}>0.71€</Text>
        </View>
        <View style={styles.summaryDivider} />
        <View style={styles.summaryRow}>
          <Text style={styles.summaryTotal}>Total</Text>
          <Text style={styles.summaryTotalValue}>12.99€</Text>
        </View>
      </View>

      {/* Payment Method */}
      <Text style={styles.paymentTitle}>Mode de paiement :</Text>
      <View style={styles.paymentMethods}>
        {/* Si vous avez des images de moyens de paiement dans vos assets */}
        <TouchableOpacity style={styles.paymentMethod}>
          <Image 
            source={require('@/assets/images/mastercard.png')} 
            style={styles.paymentIcon}
            // Si l'image n'existe pas, vous pourriez voir une erreur
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentMethod}>
          <Image 
            source={require('@/assets/images/paylib.png')} 
            style={styles.paymentIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentMethod}>
          <Image 
            source={require('@/assets/images/paypal.png')} 
            style={styles.paymentIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentMethod}>
          <Image 
            source={require('@/assets/images/visa.png')} 
            style={styles.paymentIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Pay Button */}
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Payer</Text>
      </TouchableOpacity>

      {/* Continue Shopping */}
      <TouchableOpacity style={styles.continueShopping} onPress={() => router.push("/wishlist")}>
        <Text style={styles.continueShoppingText}>Continuer mes achats</Text>
      </TouchableOpacity>
      <Navbar></Navbar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '400',
  },
  headerTitleBold: {
    fontWeight: '700',
    color: '#4A2B40',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cartItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bagIconContainer: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  bagIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  itemDetails: {
    flexDirection: 'column',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  itemSubtitle: {
    fontSize: 12,
    color: '#666',
  },
  itemDate: {
    fontSize: 12,
    color: '#666',
  },
  itemModified: {
    fontSize: 12,
    color: '#666',
  },
  cartItemRight: {
    alignItems: 'flex-end',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  quantityButtonText: {
    fontSize: 16,
  },
  quantityText: {
    paddingHorizontal: 6,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  trashIcon: {
    marginRight: 8,
  },
  deleteText: {
    color: '#666',
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginBottom: 16,
  },
  summary: {
    backgroundColor: '#FFF9C4',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#333',
  },
  summaryValue: {
    fontSize: 14,
    color: '#333',
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 8,
    borderStyle: 'dotted',
  },
  summaryTotal: {
    fontSize: 16,
    fontWeight: '600',
  },
  summaryTotalValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  paymentTitle: {
    fontSize: 14,
    marginBottom: 12,
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  paymentMethod: {
    width: '22%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  paymentIcon: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  payButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 16,
  },
  payButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  continueShopping: {
    alignItems: 'center',
  },
  continueShoppingText: {
    color: '#666',
    fontSize: 14,
  },
});

export default CartPage;