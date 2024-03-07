import React from 'react';
import { StatusBar, ImageBackground, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const Cacau = () => {
  return (
    <ImageBackground source={require("../assets/cacauLogo.png")} style={styles.background}>
      <View style={styles.container}>
        <Text>CHOCOLATERIA</Text>

        <ScrollView>
          <Text style={styles.subtitulo}>Cacau Show</Text>
          <Image style={styles.img} resizeMode="center" source={require("../assets/cacauBox.jpg")} />
          <Text style={styles.texto}> Conforme estampamos em nossas paredes, temos consciência de que “Nenhum de nós é melhor do que todos nós juntos”. Contamos e acreditamos que somente em grupo poderemos atingir nossos objetivos. Criamos e cultivamos vínculos que transbordam a simplicidade das relações que temos na firma.  </Text>
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  texto: {
    fontSize: 12,
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

export default Cacau;