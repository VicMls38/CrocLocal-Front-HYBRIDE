import { Tabs } from 'expo-router';
import React from 'react';
import 'react-native-gesture-handler';
import { Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#F3CFB6', // Couleur du texte et de l'icône actifs
        tabBarInactiveTintColor: 'white', // Couleur du texte et de l'icône inactifs
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              position: 'absolute',
              backgroundColor: '#70B54D', // Couleur de fond de la barre de navigation
              borderTopWidth: 0,
              height: 70, // Hauteur de la barre de navigation
            },
            default: {
              backgroundColor: '#70B54D',
            },
          }),
          height: 70,
          borderRadius: 50,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10, // Taille du texte des étiquettes
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Paramètre',
          tabBarIcon: ({ color }) => (
            <Icon name="settings" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="faq"
        options={{
          title: 'FAQ',
          tabBarIcon: ({ color }) => (
            <Icon name="help-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});
