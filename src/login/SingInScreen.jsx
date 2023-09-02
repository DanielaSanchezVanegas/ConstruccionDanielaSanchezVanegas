import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
} from "react-native";
import Logo from "../../assets/Logo_1.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
// Data Users
import { usersData } from "../../utils/users";
import { MENU_ITEMS } from "../../constant";

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

const SingInScreen = ({ setRouter, setisLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { user, setUser } = useUserContext();

    const { height } = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");

        if (!validarCadena(password))
            return console.warn("Contraseña no cumple las condiciones");

        const lowwerUsername = username.toLowerCase();

        console.warn("onForgotPasswordPressed");

        console.log(user)
        // Buscar en la variable de contexto
        let found = false;

        if (user.email === lowwerUsername && user.password === password); {
            found = true;
        }

        if (!found) return console.warn("Usuario o Contraseña no Encontrada");
        console.log("Loguear");
        setRouter(MENU_ITEMS.INGRESO_HORAS);
        // Redireccionar al menú principal
        // Cambiar pantalla A Menu principal
    };
    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    };

    const onSingUpPress = () => {
        console.warn("onSingUpPress");
        setisLogin(true);
    };

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.Logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />

                <CustomInput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />

                <CustomButton text="Sign In" onPress={onSignInPressed} />

                <CustomButton
                    text="Forgot password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <CustomButton
                    text="Don't have an account? Create one"
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

export default SingInScreen;