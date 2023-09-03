import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useUserContext } from "../../context/userProvider";

function validarCadena(cadena) {
  // Verificar longitud
  if (cadena.length < 8) {
    return false;
  }

  // Verificar al menos una mayúscula, una minúscula, un número y un carácter especial
  const regexMayuscula = /[A-Z]/;
  const regexMinuscula = /[a-z]/;
  const regexNumero = /[0-9]/;
  const regexEspecial = /[^A-Za-z0-9]/;

  return (
    regexMayuscula.test(cadena) &&
    regexMinuscula.test(cadena) &&
    regexNumero.test(cadena) &&
    regexEspecial.test(cadena)
  );
}
// Contexto
// Guarda un valor en memoria que tenga acceso en toda la aplicacion

const CreateAccount = ({ setRouter, setisLogin }) => {
  const { height } = useWindowDimensions();

  // Estado de contexto para toda la aplicacion
  const { user, setUser } = useUserContext();

  // Estados del Componente CreateAccount
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("Sign in");

    if (!validarCadena(password))
      return console.warn("Contraseña no cumple las condiciones");

    console.warn("Cuenta Creada");

    // Operador Spreend
    setUser({ name, lastName, email, password });

    // Cambiar pantalla A Login
    setisLogin(false);
  };

  const onSingUpPress = () => {
    console.warn("onSingUpPress");
    setisLogin(false);
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={[styles.Logo, { height: height * 0.3 }]} />

        <CustomInput placeholder="Name" value={name} setValue={setName} />

        <CustomInput
          placeholder="Last Name"
          value={lastName}
          setValue={setLastName}
        />

        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton
          text="Create Account"
          onPress={onSignInPressed} />

        <CustomButton
          text="You Do Have Account? Sing In"
          onPress={onSingUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  Logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default CreateAccount;