import {Image, View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function RestaurantCard({item}) {
  return (
    <TouchableWithoutFeedback>
     <View className='mr-6 bg-white rounded-3xl shadow-lg'>
      <Image className='h-36 w-64 rounded-t-3xl'source={item.image} />
      <View className='px-3 pb-4 space-y-2'>
        <Text className='text-lg font-bold pt-2'>{item.name}</Text>
        <View className='flex-row items-center space-x-1'>
          <Image source={require('../assets/images/star-7207.png')}
        </View>
      </View>
     </View>
    </TouchableWithoutFeedback>
  )
}