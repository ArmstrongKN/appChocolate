import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native'; // Remova a segunda importação de Image

export default function Rotas(props) {
  return (
    <SafeAreaView style={styles.container}>
      {<ImageBackground source={require('../assets/choc.jpg')} style={styles.back}>
      
        <ScrollView>
        <Text style={styles.titulo}>CHOCOLATERIA</Text>
          <Text style={styles.subtitulo}>Cacau Show</Text>
          <StatusBar style="auto" />

          <TouchableOpacity style={styles.botao} onPress={()=>{props.navigation.navigate('Cacau Show')}}> {/* Corrigido 'touchableOpacity' para 'TouchableOpacity' */}
            <Image style={styles.image} resizeMode="center" source={require("../assets/cacauShow.jpg")} />
          </TouchableOpacity> {/* Corrigido 'touchableOpacity' para 'TouchableOpacity' */}
          <Image style={styles.img} resizeMode="center" source={require("../assets/cacauShow.jpg")} />

          <Text style={styles.subtitulo}>Kopenhagen</Text>
          <TouchableOpacity style={styles.botao} onPress={()=>{props.navigation.navigate('Kopenhagen')}}> {/* Corrigido 'touchableOpacity' para 'TouchableOpacity' */}
            <Image style={styles.image} resizeMode="center" source={require("../assets/Kopenhagen.jpg")} />
          </TouchableOpacity> {/* Corrigido 'touchableOpacity' para 'TouchableOpacity' */}

          <Text style={styles.subtitulo}>Nuts</Text>
          <TouchableOpacity style={styles.botao} onPress={()=>{props.navigation.navigate('Nuts')}}> {/* Corrigido 'touchableOpacity' para 'TouchableOpacity' */}
            <Image style={styles.image} resizeMode="center" source={require("../assets/nuts.jpg")} />
          </TouchableOpacity> {/* Corrigido 'touchableOpacity' para 'TouchableOpacity' */}
        
        </ScrollView>

       </ImageBackground>}

      
    </SafeAreaView>
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
  image: {
    width: 250,
    height: 200,
    borderRadius: 8,
    marginVertical: 15,
  }
});
