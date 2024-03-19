import { StyleSheet,SafeAreaView, Text, View,Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home(props) {
  return (
    <SafeAreaView style={styles.container}>
      
      <ImageBackground source={require('../assets/choc.jpg')} style={styles.back}>
      
      <ScrollView>
        <Text style={styles.titulo}>CHOCOLATERIA</Text>
  
          <Text style={styles.subtitulo}>Cacau Show</Text>
          <StatusBar style="auto" />
          <TouchableOpacity style={styles.botao} onPress={()=>{props.navigation.navigate('cacau')}}>
          <Image style={styles.image} resizeMode="center" source={require("../assets/cacauShow.jpg")} />
          </TouchableOpacity>
         
          <Text style={styles.subtitulo}>Kopenhagen</Text>
          <TouchableOpacity style={styles.botao} onPress={()=>{props.navigation.navigate('kopenhagen')}}> 
          <Image style={styles.image} resizeMode="center" source={require("../assets/Kopenhagen.jpg")} />
          </TouchableOpacity>

          <Text style={styles.subtitulo}>Nuts</Text>
          <TouchableOpacity style={styles.botao} onPress={()=>{props.navigation.navigate('nuts')}}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
  },
  image:{
    marginLeft: 40,
    margin: 0,
    display: 'flex',
    width: 300,
    height: 150,
  },
  subtitulo:{
    margin: 10,
    textAlign: 'center',
    color: '#DEB887',
    fontSize: 40,
  },
  texto:{
    padding: 10,
    margin: 10,
    textAlign: 'center',
    color: '#DCDCDC',
    fontSize: 30,
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
});