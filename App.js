import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TestItem from "./src/components/TestItem";
import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";

export default function App() {
  const [data, setData] = useState([]);
  const [txt, setTxt] = useState("");
  const addItem = () => {
    setData([...data, { id: Math.random(), name: txt, isFav: false }]);
    setTxt("");
  };
  const editItem = (id) => {
    setData((prevState) => {
      return prevState.map((item) => {
        return item.id === id ? { ...item, isFav: !item.isFav } : item;
      });
    });
  };
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <View style={styles.v1}>
    //     <TextInput
    //       style={styles.imp}
    //       value={txt}
    //       onChangeText={(text) => {
    //         setTxt(text);
    //       }}
    //     />
    //     <Button title="Add" onPress={addItem} />
    //   </View>
    //   <View style={styles.v2}>
    //     <FlatList
    //       data={data}
    //       // keyExtractor={}
    //       renderItem={({ item }) => {
    //         return (
    //           <TestItem
    //             title={item.name}
    //             id={item.id}
    //             isFav={item.isFav}
    //             editItem={editItem}
    //           />
    //         );
    //       }}
    //     />
    //   </View>
    // </View>
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
