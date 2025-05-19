import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092' }}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Vamos{"\n"}Cozinhar</Text>
        <Text style={styles.subtitle}>Encontre as melhores receitas para você!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comece agora→</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    padding: 32,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#ddd',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f9a825',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
