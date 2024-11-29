import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah */}
      <Text style={styles.text}>Teks Di Tengah</Text>

      {/* Kotak horizontal */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: "orange" }]} />
        <View style={[styles.box, { backgroundColor: "green" }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3", // Latar belakang abu-abu terang
    justifyContent: "center", // Posisi vertikal di tengah
    alignItems: "center", // Posisi horizontal di tengah
  },
  text: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 40, // Jarak ke bawah untuk kotak
  },
  boxContainer: {
    flexDirection: "row", // Tata letak horizontal
    justifyContent: "space-between", // Jarak merata antar kotak
    width: "80%", // Lebar ruang untuk kotak
  },
  box: {
    width: 100, // Lebar kotak
    height: 100, // Tinggi kotak
  },
});
