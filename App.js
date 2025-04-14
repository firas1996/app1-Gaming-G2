import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
        <TextInput style={styles.imp} />
        <Button title="Add" />
      </View>
      <View style={styles.v2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 48,
    // backgroundColor: "#fff",
  },
  v1: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: "green",
  },
  v2: { flex: 7, width: "100%" },
  imp: {
    borderColor: "gray",
    borderWidth: 1,
    height: 48,
    width: "70%",
    borderRadius: 12,
  },
});
