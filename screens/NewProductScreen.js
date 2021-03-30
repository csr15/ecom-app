import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { Picker } from "@react-native-community/picker";

import Colors from "../constants/Colors";
import firebase from "../firebase/base.js";

const NewProductScreen = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    imageUrl: "",
    description: "",
  });
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [category, setCategory] = useState("Mens");

  React.useEffect(() => {
    return () => {
      resetFields();
    };
  }, []);

  const resetFields = () => {
    setProduct({ name: "", price: "", imageUrl: "", description: "" });
    props.navigation.navigate("Home");
  };

  const addNewProductHandler = React.useCallback(() => {
    const { name, price, imageUrl, description } = product;
    if ((name !== "" && price !== "" && imageUrl !== "", description !== "")) {
      setLoader(true);
      firebase
        .database()
        .ref(`products/${category}`)
        .push(product)
        .then(() => {
          props.navigation.navigate("Home");
          setLoader(false);
        })
        .catch((err) => {
          setError(true);
          setLoader(false);
        });
    } else {
      setError(true);
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <ScrollView>
          <KeyboardAvoidingView style={styles.formInput}>
            <View style={styles.form}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                autoFocus
                value={product.name}
                onChangeText={(text) => setProduct({ ...product, name: text })}
              />
            </View>
            <View style={styles.form}>
              <Text style={styles.label}>
                Price <Text style={styles.span}>(Indian Rupees)</Text>
              </Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={product.price}
                onChangeText={(text) => setProduct({ ...product, price: text })}
              />
            </View>
            <View style={styles.form}>
              <Text style={styles.label}>Image URL</Text>
              <TextInput
                style={styles.input}
                value={product.imageUrl}
                onChangeText={(text) =>
                  setProduct({ ...product, imageUrl: text })
                }
              />
            </View>
            <View style={styles.form}>
              <Text style={styles.label}>Select Category</Text>
              <View style={styles.category}>
                <Picker
                  selectedValue={category}
                  style={styles.categoryInput}
                  onValueChange={(itemValue) => setCategory(itemValue)}
                  mode="dialog"
                >
                  <Picker.Item label="Mens" value="mens" />
                  <Picker.Item label="Womens" value="womens" />
                  <Picker.Item label="Kids" value="kids" />
                </Picker>
              </View>
            </View>
            <View style={styles.form}>
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={styles.input}
                multiline={true}
                value={product.description}
                onChangeText={(text) =>
                  setProduct({ ...product, description: text })
                }
              />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.formSubmit}>
            <TouchableOpacity
              style={styles.postButton}
              onPress={addNewProductHandler}
            >
              {loader ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.postButtonText}>Post New Product</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={resetFields}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formGroup: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  form: {
    marginVertical: 10,
  },
  label: {
    fontFamily: "Inter_500Medium",
    color: "#000000",
  },
  span: {
    fontSize: 10,
    color: "#6e6e6e",
    fontFamily: "Inter_500Medium",
    marginLeft: 5,
  },
  input: {
    borderRadius: 7,
    backgroundColor: "#f0f2f0",
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: "#000000",
    fontFamily: "Inter_500Medium",
    marginTop: 5,
    height: "auto",
  },
  formSubmit: {
    paddingVertical: 20,
  },
  categoryInput: {
    color: "#000000",
    fontFamily: "Inter_500Medium",
    fontSize: 12,
  },
  categoryValue: {
    color: "#000000",
  },
  category: {
    borderRadius: 7,
    backgroundColor: "#f0f2f0",
    paddingHorizontal: 10,
    marginTop: 5,
    height: "auto",
    paddingVertical: 2,
  },
  postButton: {
    marginVertical: 10,
    width: "100%",
    backgroundColor: Colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  postButtonText: {
    color: "#ffffff",
    fontFamily: "Inter_600SemiBold",
  },
  cancelButton: {
    marginVertical: 5,
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  cancelButtonText: {
    color: "#6e6e6e",
    fontFamily: "Inter_600SemiBold",
    textTransform: "uppercase",
  },
});

NewProductScreen.navigationOptions = (navProps) => {
  return {
    headerTitle: (
      <Text style={{ fontFamily: "Inter_700Bold", fontSize: 18 }}>
        New Product
      </Text>
    ),
  };
};

export default NewProductScreen;
