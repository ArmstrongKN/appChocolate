import React from 'react';
import { StatusBar, ImageBackground, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MinhaTela = () => {
const navigation = useNavigation();

export default function Nuts() {
  return (
    <ImageBackground source={require("../assets/nutsLogo.jpg")} style={styles.background}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.subtitulo}>Nuts</Text>
          <Image style={styles.img} resizeMode="center" source={require("../assets/nutsBox.jpg")} />
          <Text style={styles.texto}> A combinação do chocolate com nuts da Lindt é gostosa porque resulta em um chocolate de alta qualidade combinado com uma textura crocante e única da seleção das melhores nozes. "Nuts" é uma palavra em inglês que se refere a nozes em geral, incluindo castanhas, amêndoas, pistaches, avelãs e entre outras. Esses alimentos são ricos em nutrientes, como gorduras saudáveis, proteínas, fibras, vitaminas e minerais, e são frequentemente adicionados nesse tipo de chocolate para dar sabor e textura.
          </Text>
        </ScrollView>
        <Button
      title="Ir para a próxima tela"
      onPress={() => navigation.navigate('ProximaTela')}
    />
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
    marginTop: 30,
    width:420,
    height:200,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  subtitulo: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 240,
  },
  texto: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -10,
  },
  img: {
    marginTop: -10,
    width: 250,
    height: 200,
    borderRadius: 8,
    marginVertical: 15,
  }
});

 