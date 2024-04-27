import {Image, View, Text } from 'react-native'
import React from 'react'

export default function OrderPreparingScreen() {
  return (
    <View className='flex-1 bg-white justify-center items-center'>
      <Image source={require('../assets/images/delivery-box-11395.png')} className='h-80 w-80'/>
    </View>
  )
}