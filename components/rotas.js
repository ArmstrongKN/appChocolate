import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CHOCOLATERIA</Text>

      <ScrollView>
        <Text style={styles.subtitulo}>Cacau Show</Text>
        <Image style={styles.img} resizeMode="center" source={require("../assets/cacauShow.jpg")} />

        <Text style={styles.subtitulo}>Kopenhagen</Text>
        <Image style={styles.img} resizeMode="center" source={require("../assets/Kopenhagen.jpg")} />

        <Text style={styles.subtitulo}>Nuts</Text>
        <Image style={styles.img} resizeMode="center" source={require("../assets/nuts.jpg")} />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a18262',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  img: {
    width: 250,
    height: 200,
    borderRadius: 8,
    marginVertical: 15,
  }
});