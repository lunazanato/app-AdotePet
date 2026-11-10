import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Botao from './Botao';

export default function Card({ pet, aoPressionarDetalhes }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pet.imagem }} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.nome}>{pet.nome}</Text>
        <Text style={styles.detalhe}>{pet.especie} • {pet.raca}</Text>
        <Text style={styles.detalhe}>Idade: {pet.idade} | Porte: {pet.porte}</Text>
        <Botao 
          titulo="Ver Detalhes" 
          aoPressionar={aoPressionarDetalhes} 
          corFundo="#3498db" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
  },
  imagem: {
    width: 110,
    height: '100%',
    minHeight: 130,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  detalhe: {
    fontSize: 13,
    color: '#7f8c8d',
    marginVertical: 1,
  },
});