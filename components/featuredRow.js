import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestaurantCard from './restaurantCard'

export default function FeaturedRow({title, description, restaurant}) {
  return (
   <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('See All pressed')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.scrollViewContent}
    >
      {
         restaurant.map((restaurant, index)=>{
            return(
               <RestaurantCard
               item={restaurant}
               key={index} />
            )
         })
      }
    </ScrollView>
   </View>

  )
}

const styles = StyleSheet.create({
   container: {
     marginBottom: 20,
   },
   header: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     paddingHorizontal: 15,
   },
   title: {
     fontSize: 16,
     fontWeight: 'bold',
   },
   description: {
     fontSize: 12,
     color: 'gray',
   },
   seeAll: {
     color: themeColors.text,
     fontWeight: 'bold',
   },
   scrollViewContent: {
     paddingHorizontal: 15,
     paddingVertical: 10,
   },
 })
// import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
// import React from 'react'
// import { themeColors } from '../theme'
// import RestaurantCard from './restaurantCard'

// export default function FeaturedRow({title, description, restaurant}) {
//   return (
//    <View>
//       <View className='flex-row justify-between items-center px-4'>
//          <View>
//             <Text className="font-bold text-lg">{title}</Text>
//             <Text className='text-gray-500 text-xs'>{description}</Text>
//          </View>
//          <TouchableOpacity>
//          <Text style={{color: themeColors.text}} classame='font-semibold'>Se All</Text>
//          </TouchableOpacity>
//     </View>
//     <ScrollView
//     horizontal
//     showsHorizontalScrollIndicator={false}
//     contentContainerStyle={{
//       paddingHorizontal: 15
//     }}
//     className='overflow-visible py-5'
//     >
//       {
//          restaurant.map((restaurant, index)=>{
//             return(
//                <RestaurantCard
//                item={restaurant}
//                key={index} />
//             )
//          })
//       }
//     </ScrollView>
//    </View>

//   )
// }
