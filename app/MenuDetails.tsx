import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './MenuDetailsStyles';

export default function MenuDetails() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={styles.time}>19:27</Text>
      </View>

      <Image 
        source={{uri: 'https://www.comidaereceitas.com.br/wp-content/uploads/2016/04/Feijoada-deliciosa.jpg'}} 
        style={styles.foodImage} 
      />

      <View style={styles.details}>

        <Text style={styles.title}>Feijoada Brasileira</Text>
        <View style={styles.ratingRow}>
          <AntDesign name="star" size={16} color="#F5A623" />
          <Text style={styles.rating}>4.9 (250 avaliações)</Text>
        </View>
        <Text style={styles.description}>
          Feijoada completa com carnes suínas, feijão preto e acompanhamentos tradicionais.
        </Text>

        <View style={styles.authorRow}>
          <Image 
            source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}} 
            style={styles.avatar} 
          />
          <View>
            <Text style={styles.author}>Carlos Silva</Text>
            <Text style={styles.role}>Chef de Cozinha Brasileira</Text>
          </View>
        </View>

        <View style={styles.tabRow}>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Ingredientes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButtonActive}>
            <Text style={styles.tabTextActive}>Modo de Preparo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.step}>
          <Text style={styles.stepTitle}>1. Prepare os Ingredientes</Text>
          <Text style={styles.stepText}>
            • Deixe o feijão de molho por 12 horas.{"\n"}
            • Corte as carnes (costelinha, linguiça, pé, orelha, bacon) em pedaços.
          </Text>
        </View>

        <View style={styles.step}>
          <Text style={styles.stepTitle}>2. Cozinhe a Feijoada</Text>
          <Text style={styles.stepText}>
            • Cozinhe o feijão em uma panela grande.{"\n"}
            • Acrescente as carnes e deixe cozinhar por cerca de 2 horas.{"\n"}
            • Refogue alho, cebola e louro e adicione na panela.{"\n"}
            • Mexa ocasionalmente e acerte o sal.
          </Text>
        </View>

        <View style={styles.step}>
          <Text style={styles.stepTitle}>3. Sirva</Text>
          <Text style={styles.stepText}>
            • Sirva com arroz branco, farofa, couve refogada e laranja.
          </Text>
        </View>

        <TouchableOpacity style={styles.videoButton}>
          <Text style={styles.videoButtonText}>Assistir Vídeo</Text>
        </TouchableOpacity>

        <View style={styles.commentSection}>
          <Text style={styles.commentTitle}>Comentários</Text>

          <View style={styles.comment}>
            <Image 
              source={{uri: 'https://randomuser.me/api/portraits/men/45.jpg'}} 
              style={styles.avatarComment} 
            />
            <View>
              <Text style={styles.commentName}>João Souza</Text>
              <Text style={styles.commentText}>Ficou maravilhosa! Minha família amou.</Text>
            </View>
          </View>

          <View style={styles.comment}>
            <Image 
              source={{uri: 'https://randomuser.me/api/portraits/women/65.jpg'}} 
              style={styles.avatarComment} 
            />
            <View>
              <Text style={styles.commentName}>Ana Pereira</Text>
              <Text style={styles.commentText}>Receita incrível, fácil de seguir e deliciosa.</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}
