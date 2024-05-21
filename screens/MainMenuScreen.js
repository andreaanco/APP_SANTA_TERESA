import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importar los iconos de AntDesign

const MainMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Ventas')} style={styles.button} background={{ uri: 'https://www.peru.travel/Contenido/General/Imagen/es/762/1.1/santa-teresa-convento.jpg' }}>
        <AntDesign name="shoppingcart" size={24} color="white" />
        <Text style={styles.buttonText}>Ventas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Alquileres')} style={styles.button} background={{ uri: 'https://www.peru.travel/Contenido/Uploads/claustro-principal-convento-santa-rosa_637781260094823018.jpg' }}>
        <AntDesign name="home" size={24} color="white" />
        <Text style={styles.buttonText}>Alquileres</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Museo')} style={styles.button} background={{ uri: 'https://museosantateresa.org/wp-content/uploads/2019/07/9-1.jpg' }}>
        <AntDesign name="book" size={24} color="white" />
        <Text style={styles.buttonText}>Museo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Monasterio')} style={styles.button} background={{ uri: 'https://i.pinimg.com/564x/7b/d3/fa/7bd3fa18a67fb062a2586e1bc14912b2.jpg' }}>
        <AntDesign name="bank" size={24} color="white" />
        <Text style={styles.buttonText}>Monasterio</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Usuarios')} style={styles.button} background={{ uri: 'https://www.vivearequipa.com/wp-content/uploads/2022/06/santa-teresa-3-1024x576-1-768x480.jpg' }}>
        <AntDesign name="user" size={24} color="white" />
        <Text style={styles.buttonText}>Usuarios</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 48,
    backgroundColor: '#8E0E00',
  
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
});

export default MainMenu;
