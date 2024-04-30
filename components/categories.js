import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
// import { categories } from '../constants';
import { getCategories } from "../api";
import { urlFor } from "../sanity";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {categories.map((category, index) => {
          const isActive = category._id === activeCategory;
          const btnClass = isActive
            ? styles.activeButton
            : styles.inactiveButton;
          const textClass = isActive ? styles.activeText : styles.inactiveText;
          return (
            <View key={index} style={styles.categoryContainer}>
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                style={[styles.button, btnClass]}
              >
                <Image
                  style={styles.image}
                  source={{ uri: urlFor(category.image).url() }}
                />
              </TouchableOpacity>
              <Text style={textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
  },
  categoryContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 6,
  },
  button: {
    padding: 8,
    borderRadius: 100,
    backgroundColor: "gray",
  },
  activeButton: {
    backgroundColor: "gray",
  },
  inactiveButton: {
    backgroundColor: "lightgray",
  },
  image: {
    width: 45,
    height: 45,
  },
  activeText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
  inactiveText: {
    fontSize: 14,
    color: "gray",
  },
});

// import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
// import React, { useState } from 'react'
// import { categories } from '../constants'

// export default function Categories() {
//   const [activeCategory, setActiveCategory] = useState(null);
//   return (
//     <View className='mt-4'>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         className='overflow-visible'
//         contentContainerStyle={{
//           paddingHorizontal: 40,
//           gap: 20
//         }} >
//         {
//           categories.map((category, index) => {
//             let isActive = category.id == activeCategory;
//             let btnClass = isActive ? ' bg-gray-600' : ' bg-gray-200 ';
//             let textClass = isActive ? ' font-semibold text-gray-800 ' : ' text-gray-500 ';
//             return (
//               <View key={index} className='flex justify-center items-center mr-6'>
//                 <TouchableOpacity
//                   onPress={() => setActiveCategory(category.id)}
//                   className={'p-1 rounded-full shadow bg-gray-200 ' + btnClass}>
//                   <Image style={{ width: 45, height: 45 }} source={category.image} />
//                 </TouchableOpacity>
//                 <Text className={'text-sm' + textClass}>{category.name}</Text>
//               </View>
//             )
//           })
//         }
//       </ScrollView>
//     </View>
//   )
// }
