import React, { useState } from "react";
import { View, Text, SafeAreaView, Pressable, StyleSheet, FlatList } from "react-native";
import Trabajador from "../components/Trabajador";
import Formulario from "./Formulario";

export default function Menu({ setRouter }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [trabajador, setTrabajador] = useState(true);

  const CerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Administracion de Minas</Text>

        <Pressable
          style={styles.btnNuevaCita}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.btnTextoNuevaCita}>Registro</Text>
        </Pressable>
      </SafeAreaView>

      {trabajador.length === 0 ?
        <Text style={styles.noTrabajador}> no hay citas </Text> :
        <FlatList
          style={styles.listado}
          data={trabajador}
          keyExtractors={item => item}
          renderItem={(item) => {
            return (
              <Trabajador
                item={item}
              />)
          }} />
      }
      {modalVisible && (
        <Formulario modalVisible={modalVisible} setModalVisible={setModalVisible} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  btnNuevaCita: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  btnTextoNuevaCita: {
    color: "#fff",
    fontSize: 18,
  },
});

