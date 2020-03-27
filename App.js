import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
// import Constants from "expo-constants";
import { TextInput, Card, Image } from "react-native";

// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from "react-native-paper";

export default function Moedas() {
  const [valor, setValor] = useState(null);

  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={require("./assets/money.svg")} /> */}
      <Text style={styles.titulo}>IDENTIFICA MOEDAS!</Text>

      <TextInput
        style={{
          backgroundColor: "black",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          padding: 12,
          color: "white"
        }}
        label="Digite o valor:"
        keyboardType="number-pad"
        onChangeText={valor => setValor(valor)}
      />

      <View style={styles.container2}>
        <Text style={styles.titulo}>
          Valor em centavos: {Math.trunc(valor * 100)}
        </Text>
        <Text style={styles.paragraph}>
          Quantidade de moedas de 50 centavos: {Math.trunc((valor * 100) / 50)}
        </Text>
        <Text style={styles.paragraph}>
          Quantidade de moedas de 25 centavos: {Math.trunc((valor * 100) / 25)}
        </Text>
        <Text style={styles.paragraph}>
          Quantidade de moedas de 10 centavos: {Math.trunc((valor * 100) / 10)}
        </Text>
        <Text style={styles.paragraph}>
          Quantidade de moedas de 5 centavos: {Math.trunc((valor * 100) / 5)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: "#eec857",
    padding: 8
  },
  container2: {
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
    padding: 12
  },
  paragraph: {
    margin: 12,
    marginTop: 0,
    fontSize: 20
  },
  // logo: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginLeft: 89,
  //   height: 128,
  //   width: 128
  // },
  titulo: {
    margin: 14,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
