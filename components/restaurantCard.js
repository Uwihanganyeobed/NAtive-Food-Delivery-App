import {
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";

export default function RestaurantCard({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", { ...item })}
    >
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            style={styles.image}
            source={{ uri: urlFor(item.image).url() }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <Image
                source={require("../assets/images/star-7207.png")}
                style={styles.starIcon}
              />
              <Text style={styles.rating}>{item.stars}</Text>
              <Text style={styles.reviews}>
                ({item.reviews} review).{" "}
                <Text style={styles.category}>{item?.type?.name}</Text>
              </Text>
            </View>
            <View style={styles.addressContainer}>
              <Icon.MapPin color="gray" width={15} height={15} />
              <Text style={styles.address}>Nearby. {item.address}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: themeColors.bgColor(0.2),
    shadowRadius: 7,
    marginRight: 6,
  },
  cardContent: {
    backgroundColor: "white",
    borderRadius: 20,
    shadowRadius: 7,
  },
  image: {
    height: 150,
    width: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textContainer: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  starIcon: {
    height: 15,
    width: 15,
  },
  rating: {
    fontSize: 12,
    color: "green",
  },
  reviews: {
    fontSize: 12,
    color: "gray",
  },
  category: {
    fontWeight: "bold",
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  address: {
    fontSize: 12,
    color: "gray",
    marginLeft: 5,
  },
});

// import {Image, View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
// import React from 'react'
// import * as Icon from 'react-native-feather'
// import { themeColors } from '../theme'
// export default function RestaurantCard({item}) {
//   return (
//     <TouchableWithoutFeedback>
//       <View style={{
//         shadowColor: themeColors.bgColor(0.2),
//         shadowRadius: 7
//       }}>
//       <View className='mr-6 bg-white rounded-3xl shadow-lg'>
//       <Image className='h-36 w-64 rounded-t-3xl'source={item.image} />
//       <View className='px-3 pb-4 space-y-2'>
//         <Text className='text-lg font-bold pt-2'>{item.name}</Text>
// <View className='flex-row items-center space-x-1'>
//   <Image source={require('../assets/images/star-7207.png')} className='h-4 w-4' />
//   <Text className='text-xs'>
//     <Text className='text-green-700'>{item.stars}</Text>
//     <Text className='text-gray-700'>
//       ({item.reviews} review). <Text className='font-semibold'>{item.category}</Text>
//     </Text>
//   </Text>
// </View>
// <View className='flex-row items-center space-x-1'>
//   <Icon.MapPin color='gray'width='15'height='15'/>
//   <Text className='text-gray-700 text-xs'>Nearby. {item.address}</Text>
// </View>
//       </View>
//      </View>
//       </View>

//     </TouchableWithoutFeedback>
//   )
// }
