import React, { useEffect, useState } from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-web-swiper';

const { width: viewportWidth } = Dimensions.get('window');

const carouselItems = [
  { id: '1', url: 'https://i.pinimg.com/564x/6d/4c/91/6d4c9175c93acdba9e96b982d702a920.jpg' },
  { id: '2', url: 'https://i.pinimg.com/564x/45/03/15/45031528ced39a1a455a9552c98e292b.jpg' },
  { id: '3', url: 'https://i.pinimg.com/564x/0d/9a/b1/0d9ab114e7f5c8e00b8c202e0c4f16ba.jpg' },
];

const randomPhrases = [
  "La vida es corta, come postre primero.",
  "La repostería es un arte que se come.",
  "Un día sin pastel es un día perdido.",
  "El azúcar es mi combustible.",
  "La felicidad es hornear algo dulce."
];

const ReposteriaScreen = ({ navigation }) => {
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    changePhrase(); // Set an initial phrase when the component mounts
  }, []);

  const changePhrase = () => {
    const randomIndex = Math.floor(Math.random() * randomPhrases.length);
    setPhrase(randomPhrases[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Swiper loop timeout={2.5} controlsEnabled={false}>
          {carouselItems.map(item => (
            <View key={item.id} style={styles.carouselItem}>
              <Image style={styles.carouselImage} source={{ uri: item.url }} />
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FormularioProducto')}
        >
          <Text style={styles.buttonText}>Registrar Producto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ListaProductos')}
        >
          <Text style={styles.buttonText}>Ver Productos Vendidos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.phraseContainer}>
        <Text style={styles.phraseText}>{phrase}</Text>
        <Button title="Nueva Frase" onPress={changePhrase} color="#8E0E00" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  carouselContainer: {
    width: viewportWidth - 40,
    height: 200,
    marginBottom: 20,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#8E0E00',
    padding: 10,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  phraseContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  phraseText: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
});

export default ReposteriaScreen;
