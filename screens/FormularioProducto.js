import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const FormularioProducto = ({ navigation }) => {
  const [producto, setProducto] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const [fecha, setFecha] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para guardar el producto y emitir la boleta
    console.log('Producto:', producto);
    console.log('Precio:', precio);
    console.log('Cantidad:', cantidad);
    console.log('Fecha:', fecha);
    console.log('Fecha Expiración:', fechaExpiracion);
    navigation.goBack(); // Volver a la pantalla anterior después de guardar
  };

  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre del producto"
        value={producto}
        onChangeText={setProducto}
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha"
        value={fecha}
        onChangeText={setFecha}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Expiración"
        value={fechaExpiracion}
        onChangeText={setFechaExpiracion}
      />
      <View style={styles.cantidadContainer}>
        <TouchableOpacity onPress={disminuirCantidad} style={styles.cantidadButton}>
          <Text style={styles.cantidadButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.cantidadText}>{cantidad}</Text>
        <TouchableOpacity onPress={aumentarCantidad} style={styles.cantidadButton}>
          <Text style={styles.cantidadButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Button title="Registrar" onPress={handleSubmit} color="#8E0E00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  cantidadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cantidadButton: {
    padding: 10,
    backgroundColor: '#8E0E00',
    borderRadius: 5,
  },
  cantidadButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  cantidadText: {
    marginHorizontal: 20,
    fontSize: 18,
  },
});

export default FormularioProducto;
