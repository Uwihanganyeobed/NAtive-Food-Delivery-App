import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function CartIcon() {
   const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Cart')}
        style={[styles.cartButton, { backgroundColor: themeColors.bgColor(1) }]}
      >
        <View style={styles.countContainer}>
          <Text style={styles.countText}>3</Text>
        </View>
        <Text style={styles.viewCartText}>View Cart</Text>
        <Text style={styles.totalPriceText}>${23}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
    zIndex: 50,
  },
  cartButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 30,
    padding: 5,
    paddingHorizontal: 12,
  },
  countText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  viewCartText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
})

// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { themeColors } from '../theme'

// export default function CartIcon() {
//   return (
//     <View className='absolute botoom-5 w-full z-50'>
//       <TouchableOpacity
//       style={{backgroundColor: themeColors.bgColor(1)}}
//       className='flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg'>
//          <View className='p-2 px-4 rounded-full'style={{backgroundColor: 'regba(255,255,255,0.3)'}}>
//             <Text className='font-extrabold text-white text-lg'>3</Text>
//          </View>
//          <Text className='flex-1 text-center font-extrabold text-white text-lg'>View cart</Text>
//          <Text className='font-extrabold text-white text-lg'>${23}</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }