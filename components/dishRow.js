import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "../slices/cartSlice";
import { urlFor } from "../sanity";

export default function DishRow({ item }) {
  const dispatch = useDispatch();

  const totalItems = useSelector((state) =>
    selectCartItemsById(state, item._id)
  );

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item._id }));
  };

  if (!item || !item.image || !item.name || !item.price) {
    return null; // Return null if item data is invalid
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: urlFor(item.image).url() }} />
      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={handleDecrease}
              style={styles.quantityButton}
              disabled={!totalItems.length}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              style={styles.quantityButton}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    shadowColor: themeColors.bgColor(0.2),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 5,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "gray",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: themeColors.text,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  quantityButton: {
    backgroundColor: themeColors.bgColor(1),
    borderRadius: 15,
    padding: 5,
  },
  quantityText: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
