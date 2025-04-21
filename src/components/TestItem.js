import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const TestItem = ({ title, id, isFav, editItem }) => {
  //   const { title } = props;
  return (
    <View style={styles.item}>
      <Text style={styles.itemTXT}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          editItem(id);
        }}
      >
        <AntDesign
          name={isFav ? "star" : "staro"}
          size={32}
          color={isFav ? "yellow" : "white"}
        />
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
