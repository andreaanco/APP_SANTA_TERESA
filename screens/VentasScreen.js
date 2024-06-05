import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const VentasMenu = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.optionContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Reposteria')} style={styles.option}>
          <AntDesign name="shoppingcart" size={32} color="#8E0E00" />
          <Text style={styles.optionText}>Repostería</Text>
        </TouchableOpacity>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ReposteriaIngresos')} style={styles.button}>
            <Text style={styles.buttonText}>Ingresos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ReposteriaEgresos')} style={styles.button}>
            <Text style={styles.buttonText}>Egresos</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Manualidades')} style={styles.option}>
          <AntDesign name="home" size={32} color="#8E0E00" />
          <Text style={styles.optionText}>Manualidades</Text>
        </TouchableOpacity>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ManualidadesIngresos')} style={styles.button}>
            <Text style={styles.buttonText}>Ingresos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ManualidadesEgresos')} style={styles.button}>
            <Text style={styles.buttonText}>Egresos</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Misas')} style={styles.option}>
          <AntDesign name="book" size={32} color="#8E0E00" />
          <Text style={styles.optionText}>Misas</Text>
        </TouchableOpacity>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('MisasIngresos')} style={styles.button}>
            <Text style={styles.buttonText}>Ingresos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MisasEgresos')} style={styles.button}>
            <Text style={styles.buttonText}>Egresos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  optionContainer: {
    width: '90%',  // Ajuste de ancho proporcional
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  option: {
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#8E0E00',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Asegura que los botones ocupen todo el ancho del contenedor
  },
  button: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#8E0E00',
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default VentasMenu;
