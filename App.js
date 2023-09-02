import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/login";
import Menu from "./src/menu";
import { MENU_ITEMS } from "./constant";
import { UserProvider } from "./context/userProvider";

export default function App() {
  // Reactividad
  const [menu, setmenu] = useState("LOGIN");
  return (
    <UserProvider>
      <View style={styles.container}>
        {menu === MENU_ITEMS.LOGIN && (
          <View>
            <Login setRouter={(data) => setmenu(data)} />
          </View>
        )}
        {menu === MENU_ITEMS.INGRESO_HORAS && (
          <View>
            <Menu />
          </View>
        )}
        <StatusBar style="auto" />
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); 
