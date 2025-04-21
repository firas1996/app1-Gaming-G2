import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const TestItem = ({ title }) => {
  //   const { title } = props;
  return (
    <View style={styles.item}>
      <Text style={styles.itemTXT}>{title}</Text>
      {/* <AntDesign name="staro" size={32} color="white" /> */}
      <TouchableOpacity onPress={() => {}}>
        <AntDesign name="star" size={32} color="yellow" />
      </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTXT: {
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
  },
});
