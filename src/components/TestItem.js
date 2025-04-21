import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TestItem = ({ title }) => {
  //   const { title } = props;
  return (
    <View style={styles.item}>
      <Text style={styles.itemTXT}>{title}</Text>
    </View>
  );
};

export default TestItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#261FB3",
    width: "96%",
    marginVertical: 6,
    padding: 10,
    borderRadius: 12,
    alignSelf: "center",
  },
  itemTXT: {
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
  },
});
