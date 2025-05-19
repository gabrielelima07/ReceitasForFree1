import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <Text style={styles.subtitle}>Crie uma nova conta</Text>

      <TextInput placeholder="Usuário" placeholderTextColor="#ccc" style={styles.input} />
      <TextInput placeholder="Email" placeholderTextColor="#ccc" style={styles.input} />
      <TextInput placeholder="Número de Celular" placeholderTextColor="#ccc" style={styles.input} />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry={!showPassword}
          style={styles.inputPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#ccc" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.loginPrompt}>
        Possui uma conta?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.goBack()}>
          Login
        </Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', paddingHorizontal: 50, justifyContent: 'center' },
  title: { fontSize: 26, color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#ccc', marginBottom: 20, textAlign: 'center' },
  input: {
    backgroundColor: '#1c1c1c',
    color: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  passwordContainer: {
    backgroundColor: '#1c1c1c',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputPassword: { color: '#fff', flex: 1 },
  registerButton: {
    backgroundColor: '#0288D1',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerText: { color: '#fff', fontWeight: 'bold' },
  loginPrompt: { color: '#ccc', textAlign: 'center' },
  loginLink: { color: '#fff', fontWeight: 'bold' },
});
