import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, ActivityIndicator } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../firebase/base";

import Input from "../components/Input";
import Colors from "../constants/Colors";
import Button from "../components/Button";

const SignupScreen = (props) => {
  const [signupData, setSignupData] = useState({
    age: "",
    gender: "",
    mail: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const signupHandler = () => {
    if (
      signupData.userName !== "" &&
      signupData.sureName !== "" &&
      signupData.mail !== "" &&
      signupData.password !== ""
    ) {
      setIsLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(signupData.mail, signupData.password)
        .then((res) => {
          firebase
            .database()
            .ref(`users`)
            .push({
              mail: signupData.mail,
              age: signupData.age,
              gender: signupData.gender,
            })
            .then(() => {
              props.toggleToSignin();
            })
            .catch((err) => {
              setIsLoading(false);
              Alert.alert("Something went wrong", err.message);
            });
        })
        .catch((err) => {
          setIsLoading(false);
          Alert.alert("Something went wrong", err.message);
        });
    } else {
      Alert.alert(
        "Problem occured",
        "Please fill all the fields to create an account"
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create an account!</Text>
        <Text style={styles.subTitle}>Signin up to view all products</Text>
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
              setSignupData({ ...signupData, mail: text }),
          }}
        />
        <Input
          label="Age"
          input={{
            placeholder: "21",
            autoCapitalize: "none",
            autoCompleteType: "off",
            onChangeText: (text) => setSignupData({ ...signupData, age: text }),
          }}
        />
        <Input
          label="Gender"
          input={{
            placeholder: "Male",
            autoCapitalize: "none",
            autoCompleteType: "off",
            onChangeText: (text) =>
              setSignupData({ ...signupData, gender: text }),
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
              setSignupData({ ...signupData, password: text }),
          }}
        />
        <Button
          title="Create an account"
          isLoading={isLoading}
          clickHandler={signupHandler}
        />
        <TouchableOpacity style={styles.navContainer}>
          <Text style={styles.navText} onPress={props.toggleToSignin}>
            I already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

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
    marginTop: 5,
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    backgroundColor: Colors.primary,
    marginTop: 15,
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: "Poppins_500Medium",
    color: "#ffffff",
  },
  navContainer: {
    marginTop: 40,
  },
  navText: {
    color: Colors.accent,
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
  },
});
