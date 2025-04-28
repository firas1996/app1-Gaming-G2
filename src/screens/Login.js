import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async () => {
    console.log("aaa");
    // console.log(email);
    // console.log(password);
    try {
      const res = await axios.post("http://10.33.2.8:2222/user/signin", {
        email: email,
        password: password,
      });
      console.log("zzz: " + res.data.token);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      {/* {error && <Text style={styles.error}>{error}</Text>} */}
      <TextInput
        style={styles.input}
        onChangeText={(txt) => {
          setEmail(txt);
        }}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={(txt) => {
          setPassword(txt);
        }}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Sign In" onPress={loginHandler} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
