import { AntDesign } from '@expo/vector-icons'; // Importar los iconos de AntDesign
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MainMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Ventas')} style={styles.button}>
        <ImageBackground source={{ uri: 'https://www.peru.travel/Contenido/General/Imagen/es/762/1.1/santa-teresa-convento.jpg' }} style={styles.imageBackground}>
          <View style={styles.overlay}>
            <AntDesign name="shoppingcart" size={24} color="white" />
            <Text style={styles.buttonText}>Ventas</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Alquileres')} style={styles.button}>
        <ImageBackground source={{ uri: 'https://www.peru.travel/Contenido/Uploads/claustro-principal-convento-santa-rosa_637781260094823018.jpg' }} style={styles.imageBackground}>
          <View style={styles.overlay}>
            <AntDesign name="home" size={24} color="white" />
            <Text style={styles.buttonText}>Alquileres</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Museo')} style={styles.button}>
        <ImageBackground source={{ uri: 'https://museosantateresa.org/wp-content/uploads/2019/07/9-1.jpg' }} style={styles.imageBackground}>
          <View style={styles.overlay}>
            <AntDesign name="book" size={24} color="white" />
            <Text style={styles.buttonText}>Museo</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Monasterio')} style={styles.button}>
        <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/7b/d3/fa/7bd3fa18a67fb062a2586e1bc14912b2.jpg' }} style={styles.imageBackground}>
          <View style={styles.overlay}>
            <AntDesign name="bank" size={24} color="white" />
            <Text style={styles.buttonText}>Monasterio</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Usuarios')} style={styles.button}>
        <ImageBackground source={{ uri: 'https://www.vivearequipa.com/wp-content/uploads/2022/06/santa-teresa-3-1024x576-1-768x480.jpg' }} style={styles.imageBackground}>
          <View style={styles.overlay}>
            <AntDesign name="user" size={24} color="white" />
            <Text style={styles.buttonText}>Usuarios</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  button: {
    width: '90%',
    height: 100,
    marginVertical: 5, // Para agregar una ligera separación entre los botones
    overflow: 'hidden', // Para que la imagen de fondo no se salga del botón
    borderRadius: 10,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color negro con opacidad del 50%
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default MainMenu;
