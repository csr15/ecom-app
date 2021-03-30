import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../firebase/base";
import Button from "../components/Button";

import Input from "./Input";
import Colors from "../constants/Colors";

const Signin = (props) => {
  const [signinData, setSigninData] = useState({
    mail: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const signinHandler = () => {
    if (signinData.mail !== "" && signinData.password !== "") {
      setIsLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(signinData.mail, signinData.password)
        .then(() => {
          props.navigation.navigate("Main");
        })
        .catch((err) => {
          setIsLoading(false);
          Alert.alert("Something went wrong", err.message);
        });
    } else {
      setIsLoading(false);
      Alert.alert(
        "Problem Occured",
        "Fill all the fields to singin to your account"
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.subTitle}>Signin to your account here.</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          label="Email Id"
          input={{
            placeholder: "user@mail.com",
            autoCapitalize: "none",
            autoCompleteType: "off",
            keyboardType: "email-address",
            onChangeText: (text) =>
              setSigninData({ ...signinData, mail: text }),
          }}
        />
        <Input
          label="Password"
          input={{
            placeholder: "xxxxx",
            autoCapitalize: "none",
            autoCompleteType: "off",
            secureTextEntry: true,
            onChangeText: (text) =>
              setSigninData({ ...signinData, password: text }),
          }}
        />
        <Button
          title="Signin in to your account"
          isLoading={isLoading}
          clickHandler={signinHandler}
        />
        <TouchableOpacity style={styles.navContainer}>
          <Text style={styles.navText} onPress={props.toggleToSignin}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 7,
    paddingVertical: 40,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 22,
    textAlign: "center",
    color: "#000000",
  },
  subTitle: {
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    color: Colors.accent,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    backgroundColor: Colors.primary,
    marginTop: 12,
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: "Poppins_500Medium",
    color: "#ffffff",
  },
  navContainer: {
    marginTop: 30,
  },
  navText: {
    color: Colors.accent,
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
  },
});
