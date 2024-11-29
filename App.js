import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah */}
      <Text style={styles.text}>Teks di Tengah</Text>

      {/* Kotak dengan tata letak horizontal */}
      <View style={styles.boxContainer}>
        {/* Kotak 1 */}
        <View style={[styles.box, { backgroundColor: "blue" }]} />
        {/* Kotak 2 */}
        <View style={[styles.box, { backgroundColor: "green" }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3", // Warna abu-abu terang
    justifyContent: "center", // Pusatkan secara vertikal
    alignItems: "center", // Pusatkan secara horizontal
  },
  text: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 40, // Memberi jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: "row", // Tata letak horizontal
    justifyContent: "space-between", // Jarak merata antar kotak
    width: "80%", // Lebar ruang untuk dua kotak
  },
  box: {
    width: 100, // Lebar kotak
    height: 100, // Tinggi kotak
  },
});
