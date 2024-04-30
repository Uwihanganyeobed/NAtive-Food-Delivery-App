import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { featured } from "../constants";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../slices/cartSlice";
import { urlFor } from "../sanity";

export default function CartScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const deliveryFee = 2;
  const dispatch = useDispatch();
  const [groupedItems, setGroupedItems] = useState({});
  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item._id]) {
        group[item._id].push(item);
      } else {
        group[item._id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);
  return (
    <View className="bg-white flex-1">
      {/* back-button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
          onPress={() => navigation.goBack()}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/images/fast-food-delivery-12982.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5"
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 rounded-3xl mx-2 mb-3 shadow-md"
            >
              <Text className="font-bold " style={{ color: themeColors.text }}>
                {items.length} x
              </Text>
              <Image
                className="h-14 w-14 rounded-full"
                source={{ uri: urlFor(dish.image).url() }}
              />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-bold text-base">${dish.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
                onPress={() => dispatch(removeFromCart({ id: dish._id }))}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* totals */}

      <View
        className="p-6 px-8 rounded-t-3xl space-y-4"
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
      >
        <View className="flex-row justify-between ">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">${cartTotal}</Text>
        </View>
        <View className="flex-row justify-between ">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">${deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between ">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">
            ${deliveryFee + cartTotal}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("OrderPreparing")}
            style={{ backgroundColor: themeColors.bgColor(2) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// import React from "react";
// import { View, Image, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
// import { themeColors } from "../theme";
// import { featured } from "../constants";
// import * as Icon from "react-native-feather";
// import { useNavigation } from "@react-navigation/native";

// export default function CartScreen() {
//   const restaurant = featured.restaurant[0];
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       {/* back-button */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Icon.ArrowLeft strokeWidth={3} stroke="white" />
//         </TouchableOpacity>
//         <View>
//           <Text style={styles.title}>Your Cart</Text>
//           <Text style={styles.subtitle}>{restaurant.name}</Text>
//         </View>
//       </View>
//       {/* delivery time */}
//       <View style={styles.deliveryTimeContainer}>
//         <Image
//           source={require("../assets/images/yellow-shopping-cart-10905.png")}
//           style={styles.cartImage}
//         />
//         <Text style={styles.deliveryTimeText}>Deliver in 20-30 minutes</Text>
//         <TouchableOpacity>
//           <Text style={[styles.changeText, { color: themeColors.text }]}>Change</Text>
//         </TouchableOpacity>
//       </View>
//       {/* dishes */}
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.dishesContainer}
//       >
//         {restaurant.dishes.map((dish, index) => (
//           <View key={index} style={styles.dishItem}>
//             <Text style={styles.quantity}>2 x</Text>
//             <Image style={styles.dishImage} source={dish.image} />
//             <Text style={styles.dishName}>{dish.name}</Text>
//             <Text style={styles.dishPrice}>{dish.price}</Text>
//             <TouchableOpacity style={styles.quantityButton}>
//               <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
//             </TouchableOpacity>
//           </View>
//         ))}
//       </ScrollView>
//       {/* totals */}
//       <View style={styles.totalsContainer}>
//         <View style={styles.totalRow}>
//           <Text style={styles.totalText}>Subtotal</Text>
//           <Text style={styles.totalAmount}>$20</Text>
//         </View>
//         <View style={styles.totalRow}>
//           <Text style={styles.totalText}>Delivery Fee</Text>
//           <Text style={styles.totalAmount}>$2</Text>
//         </View>
//         <View style={styles.totalRow}>
//           <Text style={styles.orderTotalText}>Order Total</Text>
//           <Text style={styles.orderTotalAmount}>$30</Text>
//         </View>
//         <TouchableOpacity style={styles.placeOrderButton}>
//           <Text style={styles.placeOrderButtonText}>Place Order</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   header: {
//     paddingTop: 20,
//     paddingHorizontal: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     position: 'relative',
//     shadowColor: 'black',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   backButton: {
//     backgroundColor: themeColors.bgColor(1),
//     borderRadius: 999,
//     padding: 10,
//     position: 'absolute',
//     top: 10,
//     left: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: 'gray',
//     textAlign: 'center',
//   },
//   deliveryTimeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: themeColors.bgColor(0.2),
//   },
//   cartImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   deliveryTimeText: {
//     flex: 1,
//     paddingLeft: 10,
//   },
//   changeText: {
//     fontWeight: 'bold',
//   },
//   dishesContainer: {
//     paddingBottom: 50,
//   },
//   dishItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     marginHorizontal: 10,
//     marginBottom: 10,
//     borderRadius: 20,
//     backgroundColor: themeColors.bgColor(0.1),
//   },
//   quantity: {
//     fontWeight: 'bold',
//     marginRight: 5,
//   },
//   dishImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   dishName: {
//     flex: 1,
//     paddingLeft: 10,
//     fontWeight: 'bold',
//   },
//   dishPrice: {
//     fontWeight: 'bold',
//   },
//   quantityButton: {
//     backgroundColor: themeColors.bgColor(1),
//     borderRadius: 999,
//     padding: 5,
//   },
//   totalsContainer: {
//     padding: 20,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     backgroundColor: themeColors.bgColor(0.2),
//   },
//   totalRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   totalText: {
//     color: 'gray',
//   },
//   totalAmount: {
//     fontWeight: 'bold',
//   },
//   orderTotalText: {
//     fontWeight: 'bold',
//   },
//   orderTotalAmount: {
//     fontWeight: 'bold',
//   },
//   placeOrderButton: {
//     backgroundColor: themeColors.bgColor(2),
//     borderRadius: 999,
//     padding: 15,
//   },
//   placeOrderButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     fontSize: 16,
//   },
// });
