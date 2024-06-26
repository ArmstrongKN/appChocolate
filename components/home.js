import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, Image, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';  

const Rotas = () => {

const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/choc.jpg')} style={styles.back}>

        <ScrollView>
        <Text style={styles.titulo}>CHOCOLATERIA</Text>

          <StatusBar style="auto" />
          <Text style={styles.subtitulo}>Cacau Show</Text>
          <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate('Cacau')}}>
            <Image style={styles.image} resizeMode="center" source={require("../assets/cacauShow.jpg")} />
          </TouchableOpacity>

          <Text style={styles.subtitulo}>Kopenhagen</Text>
          <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate('Kopenhagen')}}> 
            <Image style={styles.image} resizeMode="center" source={require("../assets/Kopenhagen.jpg")} />
          </TouchableOpacity>

          <Text style={styles.subtitulo}>Nuts</Text>
          <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate('Nuts')}}>
            <Image style={styles.image} resizeMode="center" source={require("../assets/nuts.jpg")} />
          </TouchableOpacity>

        </ScrollView>
       </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6c3c0c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: 800,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 200,
    borderRadius: 300,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default Rotas;