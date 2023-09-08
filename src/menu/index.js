import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Formulario from "./Formulario";
import Trabajador from "../components/Trabajador";


export default function Menu({ setRouter }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [trabajador, setTrabajador] = useState([]);
  const [trabajadorSeleccionado, setTrabajadorSeleccionado] = useState(null);

  const editarTrabajador = (trabajador) => {
    setTrabajadorSeleccionado(trabajador);
    setModalVisible(true);
  };

  const eliminarTrabajador = (id) => {
    setTrabajador(trabajador.filter((trabajador) => trabajador.id !== id));
  };

  const agregarTrabajador = (nuevoTrabajador) => {
    nuevoTrabajador.id = Date.now();
    setTrabajador([...trabajador, nuevoTrabajador]);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Administración de Minas</Text>

      <TouchableOpacity
        style={styles.btnNuevoRegistro}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.btnTextoRegistro}>Nuevo Registro</Text>
      </TouchableOpacity>

      {trabajador.length === 0 ? (
        <Text style={styles.sinTrabajador}>No existen trabajadores</Text>
      ) : (
        <FlatList
          style={styles.lista}
          data={trabajador}
          renderItem={({ item }) => (
            <Trabajador
              item={item}
              onEliminar={() => eliminarTrabajador(item.id)}
              onEditar={() => editarTrabajador(item)}
            />
          )}
          keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
        />
      )}

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        agregarTrabajador={agregarTrabajador}
        trabajadorSeleccionado={trabajadorSeleccionado}
        setTrabajadorSeleccionado={setTrabajadorSeleccionado}
        trabajador={trabajador}
        setTrabajador={setTrabajador}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  btnNuevoRegistro: {
    backgroundColor: "#007bff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  btnTextoRegistro: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  sinTrabajador: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginTop: 20,
  },
  lista: {
    marginTop: 20,
  },
});
