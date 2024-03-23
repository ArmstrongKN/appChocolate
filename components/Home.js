import React from 'react';
import { StyleSheet, SafeAreaView, Text, ImageBackground, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const chocolaterias = [
  { id: 1, name: 'Cacau Show', image: require('../assets/cacauShow.jpg') },
  { id: 2, name: 'Kopenhagen', image: require('../assets/Kopenhagen.jpg') },
  { id: 3, name: 'Nuts', image: require('../assets/nuts.jpg') },
];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(item.name.toLowerCase())}>
      <Text style={styles.subtitulo}>{item.name}</Text>
      <ImageBackground style={styles.image} resizeMode="cover" source={item.image}>
        <Text style={styles.overlay}>{item.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/choc.jpg')} style={styles.back}>
        <ScrollView>
          <Text style={styles.titulo}>CHOCOLATERIA</Text>
          <FlatList
            data={chocolaterias}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </ScrollView>
        <StatusBar style="auto" />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  back: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    zIndex: -1,
    position: 'absolute',
  },
  titulo: {
    fontSize: 50,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 40,
    textAlign: 'center',
    color: '#DEB887',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    fontSize: 30,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
