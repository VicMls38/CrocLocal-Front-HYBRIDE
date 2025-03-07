import React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";


const navbar = () => {

    const router = useRouter();

  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => router.push("/commandesProducteur")}>
            <View style={styles.wrapper}>
                <FontAwesome name="cog" size={24} color={"#FFF"} />
                <Ionicons name="settings" size={24} color={"#FFF"} />
            </View>
        </TouchableOpacity>

        <View>

        </View>

        <View>

        </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height:8,
    alignItems: 'center',
    display:"flex"
  },
});

export default navbar;
