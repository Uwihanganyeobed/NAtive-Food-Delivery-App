import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import * as Icon from 'react-native-feather'

export default function DishRow({ item }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton}>
              <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
            </TouchableOpacity>
            <Text style={styles.quantityText}>2</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: themeColors.text,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
})

// import { View, Text,Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { themeColors } from '../theme'
// import * as Icon from 'react-native-feather'

// export default function DishRow({item}) {
//   return (
//     <View className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
//       <Image className='rounded-3xl'style={{height: 100, width: 100}} source={item.image} />
//       <View className='flex flex-1 space-y-3'>
//         <View className='pl-3'>
//         <Text className='text-xl'>{item.name}</Text>
//         <Text className='text-gray-700'>{item.description}</Text>
//         </View>
//         <View className='flex-row justify-between pl-3 items-center'>
//           <Text className='text-gray-700 text-lg font-bold'>
//             ${item.price}
//           </Text>
//           <View className='flex-row items-center'>
//             <TouchableOpacity
//             className='p-1 rounded-full'
//             style={{backgroundColor: themeColors.bgColor(1)}}>
//               <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
//             </TouchableOpacity>
//             <Text className='px-3'>{2}</Text>
//             <TouchableOpacity
//             className='p-1 rounded-full'
//             style={{backgroundColor: themeColors.bgColor(1)}}>
//               <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   )
// }