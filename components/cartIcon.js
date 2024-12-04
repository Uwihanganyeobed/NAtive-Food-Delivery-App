import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../slices/cartSlice";

export default function CartIcon() {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems) || [];
  const cartTotal = useSelector(selectCartTotal) || 0;

  if (!cartItems.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={[styles.cartButton, { backgroundColor: themeColors.bgColor(1) }]}
      >
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{cartItems.length}</Text>
        </View>
        <Text style={styles.viewCartText}>View Cart</Text>
        <Text style={styles.totalPriceText}>${cartTotal.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 5,
    width: "100%",
    zIndex: 50,
  },
  cartButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 30,
    padding: 15,
    paddingHorizontal: 20,
    shadowColor: themeColors.bgColor(0.3),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 5,
  },
  countContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 30,
    padding: 5,
    paddingHorizontal: 12,
  },
  countText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  viewCartText: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
