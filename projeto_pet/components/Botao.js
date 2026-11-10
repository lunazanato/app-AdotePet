import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao({ titulo, aoPressionar, corFundo = '#e67e22' }) {
  return (
    <TouchableOpacity 
      style={[styles.botao, { backgroundColor: corFundo }]} 
      onPress={aoPressionar}
      activeOpacity={0.8}
    >
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});