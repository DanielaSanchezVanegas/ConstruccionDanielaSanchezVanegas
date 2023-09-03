import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Trabajador = ({ item }) => {
    const { trabajador, date } = item;
    const trabajadorText = Array.isArray(trabajador) ? trabajador.join(', ') : trabajador;
    const dateText = Array.isArray(date) ? date.join(', ') : date;
    
    const formateoDate = date => {
        const newDate = new Date(date)
        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return newDate.toLocaleDateString('es-ES', opciones)
    }
    

    return (
        <View>
            <Text>{trabajador}</Text>
            <Text>{formateoDate(date)}</Text>
        </View>
    )
}

export default Trabajador;