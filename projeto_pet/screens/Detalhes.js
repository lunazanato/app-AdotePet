import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import Botao from '../components/Botao';

export default function Detalhes({ route, navigation }) {
  const { pet } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: pet.imagem }} style={styles.imagemCapa} />
      
      <View style={styles.conteudo}>
        <Cabecalho titulo={pet.nome} subtitulo={`${pet.especie} • ${pet.raca}`} />

        <View style={styles.cardInfo}>
          <Text style={styles.rotulo}>Idade: <Text style={styles.valor}>{pet.idade}</Text></Text>
          <Text style={styles.rotulo}>Porte: <Text style={styles.valor}>{pet.porte}</Text></Text>
        </View>

        <View style={styles.secaoDescricao}>
          <Text style={styles.tituloSecao}>Sobre o pet:</Text>
          <Text style={styles.descricao}>{pet.descricao}</Text>
        </View>

        <Botao 
          titulo="Quero Adotar este Pet" 
          aoPressionar={() => navigation.navigate('Formulario', { nomePet: pet.nome })} 
          corFundo="#27ae60" 
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  imagemCapa: {
    width: '100%',
    height: 240,
  },
  conteudo: {
    padding: 20,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginVertical: 12,
    elevation: 2,
  },
  rotulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7f8c8d',
  },
  valor: {
    fontWeight: 'normal',
    color: '#2c3e50',
  },
  secaoDescricao: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  tituloSecao: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
});