import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem-Vindo</Text>
      <Text style={styles.subtitle}>Entre com a sua conta</Text>

      <TextInput placeholder="Email" placeholderTextColor="#ccc" style={styles.input} />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#ccc"
          style={styles.inputPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#ccc" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Não tem uma conta?{' '}
        <Text style={styles.signupLink} onPress={() => navigation.navigate('Register')}>
          Crie uma
        </Text>
      </Text>

      <View style={styles.socialContainer}>
        <Ionicons name="logo-google" size={24} color="#fff" />
        <Ionicons name="logo-facebook" size={24} color="#fff" />
        <Ionicons name="logo-instagram" size={24} color="#fff" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', paddingHorizontal: 40,
  justifyContent: 'center' },

  title: { fontSize: 26, color: '#fff', fontWeight: 'bold', textAlign: 'center' },

  subtitle: { fontSize: 14, color: '#ccc', marginBottom: 20, textAlign: 'center' }, 

  input: {
    backgroundColor: '#1c1c1c',
    color: '#fff',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    backgroundColor: '#1c1c1c',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 15,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputPassword: { color: '#fff', flex: 1 },
  loginButton: {
    backgroundColor: '#f9a825',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: { color: '#fff', fontWeight: 'bold' },
  signupText: { color: '#ccc', textAlign: 'center' },
  signupLink: { color: '#fff', fontWeight: 'bold' },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 24,
  },
});
