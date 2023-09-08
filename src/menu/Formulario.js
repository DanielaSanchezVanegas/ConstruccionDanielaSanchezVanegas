import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, ScrollView, TextInput, View, Modal, Text,
  Pressable, Alert, StyleSheet, Button, Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const Formulario = ({
  modalVisible,
  setModalVisible,
  agregarTrabajador,
  trabajadorSeleccionado,
  setTrabajadorSeleccionado,
}) => {
  const [trabajador, setTrabajador] = useState('');
  const [cedula, setCedula] = useState('');
  const [novedad, setNovedad] = useState('');
  const [date, setDate] = useState(() => new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);


  useEffect(() => {
    if (trabajadorSeleccionado) {
      setTrabajador(trabajadorSeleccionado.trabajador);
      setCedula(trabajadorSeleccionado.cedula);
      setNovedad(trabajadorSeleccionado.novedad);
      setDate(new Date(trabajadorSeleccionado.date));
    } else {
      resetForm();
    }
  }, [trabajadorSeleccionado]);

  const resetForm = () => {
    setTrabajador('');
    setCedula('');
    setDate(new Date());
    setNovedad('');

  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const showTimePickerHandle = () => {
    setShowTimePicker(true);
  };
  //ocultar el selector de tiempo
  const hideTimePicker = () => {
    setShowTimePicker(false);
  };

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

    if (trabajadorSeleccionado) {
      agregarTrabajador(nuevoTrabajador);
    } else {
      agregarTrabajador(nuevoTrabajador);
      resetForm();
    }

    setTrabajadorSeleccionado(null);
    setModalVisible(false);
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <View>
            <Text style={styles.title}>Registro de trabajadores</Text>
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
            <Button title="Seleccionar fecha " onPress={showDatePicker} />
            {showPicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          <View>
            <Button title="Seleccionar hora" onPress={showTimePickerHandle} />
            {showTimePicker && (
              <DateTimePicker
                testID="timePicker"
                value={date}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  onChange(event, selectedDate);
                  hideTimePicker();
                }}
              />
            )}
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

          <View>
            <Text>Fecha y Hora Seleccionada: {date.toLocaleString()}</Text>
          </View>

        </ScrollView>
      </SafeAreaView>
    </Modal >
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  label: {
    color: '#333',
    marginBottom: 10,
    marginTop: 24,
    fontSize: 16,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#FFF',
    height: 40,
    paddingHorizontal: 10,
    paddingBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#888',
    marginBottom: 20,
    fontSize: 16,

  },

  inputnovedad: {
    fontWeight: '100',
  },

  dateContenedor: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#888',
  },

  btnGuardar: {
    backgroundColor: '#007BFF',
    broad: '100%',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,

    marginVertical: 40,
    alignItems: 'center',

  },

  btnTextoGuardar: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnCancelar: {
    backgroundColor: '#888',
    broad: '100%',
    padding: 15,

    alignItems: 'center',
    borderRadius: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },

});

export default Formulario;
