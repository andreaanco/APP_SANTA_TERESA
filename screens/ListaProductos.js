import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListaProductos = () => {
  const productosVendidos = [
    { id: '1', nombre: 'Pastel', precio: '10', cantidad: '2', fecha: '2023-01-01', fechaExpiracion: '2023-01-10' },
    { id: '2', nombre: 'Galletas', precio: '5', cantidad: '5', fecha: '2023-01-02', fechaExpiracion: '2023-01-12' },
    // Más productos vendidos aquí
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={productosVendidos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Producto: {item.nombre}</Text>
            <Text style={styles.itemText}>Precio: {item.precio}</Text>
            <Text style={styles.itemText}>Cantidad: {item.cantidad}</Text>
            <Text style={styles.itemText}>Fecha: {item.fecha}</Text>
            <Text style={styles.itemText}>Fecha de Expiración: {item.fechaExpiracion}</Text>
          </View>
        )}
      />
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
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ListaProductos;
