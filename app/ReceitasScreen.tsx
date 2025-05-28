import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';

export default function ReceitasScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        
        <Text style={styles.title}>
          Encontre <Text style={styles.titleHighlight}>melhores receitas</Text> para cozinhar
        </Text>

     
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#B7B7B7" />
          <TextInput
            placeholder="Buscar receitas"
            placeholderTextColor="#B7B7B7"
            style={styles.searchInput}
          />
        </View>

        
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Em alta 🔥</Text>
          <Text style={styles.verMais}>Ver tudo</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.cardTrending}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1604908177522-c9ad99318006' }}
              style={styles.cardImage}
            />
            <View style={styles.rating}>
              <FontAwesome name="star" size={14} color="#FFD700" />
              <Text style={styles.ratingText}>4.8</Text>
            </View>
            <Text style={styles.cardTime}>1h 20min</Text>
            <Text style={styles.cardTitle}>Rendang Wagyu Pare</Text>
            <Text style={styles.cardAuthor}>por Wade Warren</Text>
          </View>
        </ScrollView>

      
        <Text style={styles.sectionTitle}>Categorias populares</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1589307000233-4c5b9fbad3a3' }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryTitle}>Wagyu Rendang</Text>
            <Text style={styles.categoryAuthor}>Jacob Jones</Text>
            <Text style={styles.categoryTime}>80 min</Text>
          </View>

          <View style={styles.categoryCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1613145998970-16d37e56d203' }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryTitle}>Seblak Bandung</Text>
            <Text style={styles.categoryAuthor}>Ralph Edwards</Text>
            <Text style={styles.categoryTime}>80 min</Text>
          </View>
        </ScrollView>

      
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Receitas recentes</Text>
          <Text style={styles.verMais}>Ver tudo</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.recentCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1606755962770-bfd3e26d6241' }}
              style={styles.recentImage}
            />
            <Text style={styles.recentTitle}>Ayam Goreng</Text>
          </View>

          <View style={styles.recentCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1606166325683-3dce7a9ec7a9' }}
              style={styles.recentImage}
            />
            <Text style={styles.recentTitle}>Ayam Goreng Sambal Ijo</Text>
          </View>
        </ScrollView>

       
        <Text style={styles.sectionTitle}>Chef populares</Text>
        <View style={styles.chefContainer}>
          <View style={styles.chef}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={styles.chefImage}
            />
            <Text style={styles.chefName}>Arnold</Text>
            <Text style={styles.chefStat}>500k</Text>
          </View>

          <View style={styles.chef}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/women/65.jpg' }}
              style={styles.chefImage}
            />
            <Text style={styles.chefName}>Renata</Text>
            <Text style={styles.chefStat}>230k</Text>
          </View>

          <View style={styles.chef}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/women/45.jpg' }}
              style={styles.chefImage}
            />
            <Text style={styles.chefName}>Juna</Text>
            <Text style={styles.chefStat}>450k</Text>
          </View>

          <View style={styles.chef}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
              style={styles.chefImage}
            />
            <Text style={styles.chefName}>Asep</Text>
            <Text style={styles.chefStat}>210k</Text>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  titleHighlight: {
    color: '#F9A602',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    color: '#000',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  verMais: {
    color: '#F9A602',
  },
  cardTrending: {
    width: 250,
    marginRight: 15,
    marginTop: 10,
  },
  cardImage: {
    width: '100%',
    height: 140,
    borderRadius: 15,
  },
  rating: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
  },
  cardTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 3,
  },
  cardAuthor: {
    fontSize: 12,
    color: '#999',
  },
  categoryCard: {
    width: 180,
    marginRight: 15,
    marginTop: 15,
    backgroundColor: '#FFF5E0',
    borderRadius: 15,
    padding: 10,
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  categoryAuthor: {
    fontSize: 12,
    color: '#666',
  },
  categoryTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 3,
  },
  recentCard: {
    marginRight: 15,
    marginTop: 15,
  },
  recentImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },
  recentTitle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  chefContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  chef: {
    alignItems: 'center',
  },
  chefImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  chefName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  chefStat: {
    fontSize: 12,
    color: '#999',
  },
});
