import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
  Modal,
  Text,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const Formulario = ({ modalVisible, setModalVisible }) => {
  const [trabajador, setTrabajador] = useState([]);
  const [cedula, setCedula] = useState('');
  const [novedad, setNovedad] = useState('');
  const [date, setDate] = useState (() => new Date());

  const savetrabajadorHandle = () => {
    if ([trabajador, cedula].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    const nuevoTrabajador = {
      id: Date.now(),
      trabajador,
      cedula,
      date,
      novedad,
    };
    setTrabajador((prevTrabajador) => [...prevTrabajador, nuevoTrabajador]);
    setModalVisible(!modalVisible);
    setTrabajador('');
    setCedula('');
    setDate(new Date());
    setNovedad('');
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <View>
            <Text style={styles.label}>Nombre del trabajador</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre del trabajador"
              placeholderTextColor="#666"
              value={trabajador}
              onChangeText={setTrabajador}
            />
          </View>

          <View>
            <Text style={styles.label}>Cedula</Text>
            <TextInput
              style={styles.input}
              placeholder="Cedula"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              maxLength={10}
              value={cedula}
              onChangeText={setCedula}
            />
          </View>

          <View>
            <Text style={styles.label}>Fecha</Text>
            <View style={styles.dateContenedor}>
            <DateTimePicker
                locale="es"
                is24Hour={true}
                value={date}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  if (selectedDate) {
                    setDate(selectedDate);
                  }
                }}
              />
            </View>
          </View>

          <View>
            <Text style={styles.label}>Novedad</Text>
            <TextInput
              style={[styles.input, styles.inputnovedad]}
              placeholder="Novedad"
              placeholderTextColor="#666"
              value={novedad}
              onChangeText={setNovedad}
            />
          </View>

          <View>
            <Pressable style={styles.btnGuardar} onPress={savetrabajadorHandle}>
              <Text style={styles.btnTextoGuardar}>Guardar</Text>
            </Pressable>

            <Pressable
              style={styles.btnCancelar}
              onLongPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.btnTextoCancelar}>Cancelar</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#D3D3D3',
    flex: 1,
  },

  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#FFF',
    paddingBottom: 15,
    borderRadius: 10,
  },

  inputnovedad: {
    fontWeight: '100',
  },

  dateContenedor: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },

  btnGuardar: {
    backgroundColor: '#FFF',
    width: "100%",
    padding: 15,
    marginVertical: 40,
    alignItems: "center",
    borderRadius: 30,
  },

  btnTextoGuardar: {},
  btnCancelar: {
    backgroundColor: '#FFF',
    width: "100%",
    padding: 15,
    marginVertical: 1,
    alignItems: "center",
    borderRadius: 30,

  },
});

export default Formulario;
