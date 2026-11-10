import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import Botao from '../components/Botao';

export default function Formulario({ route, navigation }) {
  const { nomePet } = route.params || { nomePet: 'o Pet' };

  const [form, setForm] = useState({
    nomeAdotante: '',
    telefone: '',
    cidade: '',
    motivo: '',
  });

  const atualizarCampo = (campo, valor) => {
    setForm((estadoAnterior) => ({
      ...estadoAnterior,
      [campo]: valor,
    }));
  };

  const enviarFormulario = () => {
    if (form.nomeAdotante === '' || form.telefone === '' || form.cidade === '') {
      Alert.alert('Atenção', 'Por favor, preencha os campos obrigatórios.');
      return;
    }

    Alert.alert(
      'Solicitação Enviada!',
      `Obrigado, ${form.nomeAdotante}! Seu pedido de adoção para ${nomePet} foi registrado com sucesso.`,
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Cabecalho titulo="Formulário de Adoção" subtitulo={`Interesse em: ${nomePet}`} />

      <View style={styles.grupoInput}>
        <Text style={styles.label}>Seu Nome Completo *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#95a5a6"
          value={form.nomeAdotante}
          onChangeText={(texto) => atualizarCampo('nomeAdotante', texto)}
        />
      </View>

      <View style={styles.grupoInput}>
        <Text style={styles.label}>Telefone / WhatsApp *</Text>
        <TextInput
          style={styles.input}
          placeholder="(00) 00000-0000"
          placeholderTextColor="#95a5a6"
          keyboardType="phone-pad"
          value={form.telefone}
          onChangeText={(texto) => atualizarCampo('telefone', texto)}
        />
      </View>

      <View style={styles.grupoInput}>
        <Text style={styles.label}>Cidade / Estado *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: São Paulo - SP"
          placeholderTextColor="#95a5a6"
          value={form.cidade}
          onChangeText={(texto) => atualizarCampo('cidade', texto)}
        />
      </View>

      <View style={styles.grupoInput}>
        <Text style={styles.label}>Por que você deseja adotar?</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Conte um pouco sobre sua rotina..."
          placeholderTextColor="#95a5a6"
          multiline
          numberOfLines={4}
          value={form.motivo}
          onChangeText={(texto) => atualizarCampo('motivo', texto)}
        />
      </View>

      <Botao 
        titulo="Finalizar Solicitação" 
        aoPressionar={enviarFormulario} 
        corFundo="#e67e22" 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    flexGrow: 1,
  },
  grupoInput: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dcdde1',
    fontSize: 15,
    color: '#2c3e50',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});