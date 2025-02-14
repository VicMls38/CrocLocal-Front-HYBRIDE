import { Tabs } from 'expo-router';
import React from 'react';
import 'react-native-gesture-handler';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="accueil"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="shoe.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="connexion_producteur"
        options={{
          title: 'Connexion',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="wallet.pass.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="inscriptionProducteur"
        options={{
          title: 'Inscription',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="wallet.pass" color={color} />,
        }}
      />
    </Tabs>
    
    
  );
}
