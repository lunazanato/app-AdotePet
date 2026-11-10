import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { getPets } from '../services/petService';
import Cabecalho from '../components/Cabecalho';
import Card from '../components/Card';

export default function Home({ navigation }) {
  const [pets, setPets] = useState([]);
  const [busca, setBusca] = useState('');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let montado = true;

    const temporizador = setTimeout(() => {
      if (montado) {
        const dados = getPets();
        setPets(dados);
        setCarregando(false);
      }
    }, 700);

    return () => {
      montado = false;
      clearTimeout(temporizador);
    };
  }, []);

  const petsFiltrados = pets.filter((pet) =>
    pet.nome.toLowerCase().includes(busca.toLowerCase()) ||
    pet.especie.toLowerCase().includes(busca.toLowerCase())
  );

  if (carregando) {
    return (
      <View style={styles.centralizado}>
        <ActivityIndicator size="large" color="#e67e22" />
        <Text style={styles.textoCarregando}>Carregando pets disponíveis...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Cabecalho titulo="🐾 AdotePet" subtitulo="Encontre seu novo melhor amigo" />
      
      <TextInput
        style={styles.inputBusca}
        placeholder="Pesquisar por nome ou espécie..."
        placeholderTextColor="#95a5a6"
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={petsFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card 
            pet={item} 
            aoPressionarDetalhes={() => navigation.navigate('Detalhes', { pet: item })} 
          />
        )}
        ListEmptyComponent={
          <View style={styles.vazio}>
            <Text style={styles.textoVazio}>Nenhum pet encontrado.</Text>
          </View>
        }
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  centralizado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  textoCarregando: {
    marginTop: 10,
    fontSize: 15,
    color: '#7f8c8d',
  },
  inputBusca: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dcdde1',
    fontSize: 15,
    marginBottom: 16,
    color: '#2c3e50',
  },
  lista: {
    paddingBottom: 20,
  },
  vazio: {
    alignItems: 'center',
    marginTop: 40,
  },
  textoVazio: {
    fontSize: 15,
    color: '#95a5a6',
  },
});