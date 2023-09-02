import { View, Text } from "react-native";
import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import SingInScreen from "./SingInScreen";

export default function Login({ setRouter }) {
  const [isLogin, setisLogin] = useState({ items: [] });
  return (
    <View>
      {isLogin ? (
        <View>
          <CreateAccount setisLogin={(value) => setisLogin(value)} />
        </View>
      ) : (
        <View>
          <SingInScreen
            setisLogin={(value) => setisLogin(value)}
            setRouter={(value) => setRouter(value)}
          />
        </View>
      )}
    </View>
  );
}