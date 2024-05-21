import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  return (
    <LinearGradient colors={['#8E0E00', '#1F1C18']} style={styles.container}>
      <View style={styles.formContainer}>
        <Image source={{ uri: 'https://png.pngtree.com/png-vector/20240426/ourlarge/pngtree-christian-nuns-praying-in-the-light-of-moon-png-image_12302825.png' }} style={styles.logo} />
        <Text style={styles.title}>Welcome Back!</Text>
        <View style={styles.inputContainer}>
          <Icon name="email" size={24} color="#fff" style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" placeholderTextColor="#ccc" />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={24} color="#fff" style={styles.inputIcon} />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} placeholderTextColor="#ccc" />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainMenu')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.footerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: 'rgba(31, 28, 24, 0.95)',
    padding: 25,
    borderRadius: 15,
    borderColor: '#8E0E00',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 60,
  },
  title: {
    fontSize: 26,
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#2a2a2a',
  },
  inputIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#fff',
  },
  button: {
    backgroundColor: '#8E0E00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#ccc',
    marginRight: 5,
  },
  footerLink: {
    color: '#8E0E00',
    fontWeight: 'bold',
  },
});
