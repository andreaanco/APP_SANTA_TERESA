import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MainMenuScreen from '../screens/MainMenuScreen';
import VentasScreen from '../screens/VentasScreen';
import AlquileresScreen from '../screens/AlquileresScreen';
import MuseoScreen from '../screens/MuseoScreen';
import MonasterioScreen from '../screens/MonasterioScreen';
import UsuariosScreen from '../screens/UsuariosScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
        <Stack.Screen name="Ventas" component={VentasScreen} />
        <Stack.Screen name="Alquileres" component={AlquileresScreen} />
        <Stack.Screen name="Museo" component={MuseoScreen} />
        <Stack.Screen name="Monasterio" component={MonasterioScreen} />
        <Stack.Screen name="Usuarios" component={UsuariosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
