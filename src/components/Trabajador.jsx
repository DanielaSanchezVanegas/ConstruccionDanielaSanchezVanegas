import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Trabajador = ({ item, onEliminar, onEditar }) => {
  const { Trabajador, novedad } = item; // Use "Trabajador" instead of "trabajador"
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Trabajador}</Text>
      <Text style={styles.text}>{novedad}</Text>
      <TouchableOpacity onPress={onEliminar} style={styles.button}>
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onEditar(item)} style={styles.button}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
  button: {
    padding: 8,
    backgroundColor: '#007bff',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Trabajador;
