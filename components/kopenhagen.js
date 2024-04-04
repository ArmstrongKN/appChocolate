import React from 'react';
import { StatusBar, ImageBackground, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function Kopenhagen() {
  return (
    <ImageBackground source={require("../assets/kopenhagenLogo.jpg")} style={styles.background}>
      <View style={styles.container}>
        <Text>CHOCOLATERIA</Text>

        <ScrollView>
          <Text style={styles.subtitulo}>Kopenhagen</Text>
          <Image style={styles.img} resizeMode="center" source={require("../assets/kopenhagenBox.png")} />
          <Text style={styles.texto}> Há mais de 95 anos a Kopenhagen, marca 100% brasileira, nasceu com um propósito: Fazer a diferença em cada momento criando emoções únicas à partir do sabor inigualável do seu chocolate. Baseados nesse objetivo, ano a ano, década a década, muitos dos chocolates Kopenhagen ganharam o status de clássicos, ícones que atravessam gerações e marcam momentos únicos de alegria e celebração fazendo a diferença na vida das pessoas. O elo criado com todos os nossos clientes por meio do sabor sofisticado que atravessou a barreira do tempo, fez com que o propósito da Kopenhagen ficasse ainda mais fiel ao que todos entendiam como a verdade da marca: a Kopenhagen gera conexões e transforma momentos comuns em extraordinários.
          </Text>
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
