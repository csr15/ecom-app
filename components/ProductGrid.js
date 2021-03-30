import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProductGrid = ({ name, price, description, imageUrl, onclick }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onclick}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        <View style={styles.details}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.description} numberOfLines={1}>
            {description}
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            ₹{price}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 270,
    borderWidth: 1,
    borderColor: "#f5f5f5",
  },
  imageContainer: {
    margin: 0,
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  details: {
    height: 70,
    paddingHorizontal: 7,
    justifyContent: "center",
    paddingVertical: 0,
  },
  name: {
    fontFamily: "Inter_600SemiBold",
  },
  price: {
    fontFamily: "Inter_500Medium",
    fontSize: 12,
  },
  description: {
    fontFamily: "Inter_300Light",
    color: "#6e6e6e",
    fontSize: 12,
    marginVertical: 2,
  },
});

export default ProductGrid;
