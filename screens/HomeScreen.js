import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from 'react-native-feather'

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height='25'width='25' stroke='gray'/>
          <TextInput placeholder='Restaurants'className='ml-2 flex-1'/>
          <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gary 300'>
            <Icon.MapPin height='20'width='20'stroke='gray'/>
            <Text className='text-gray-600'>New York, NYC</Text>
          </View>
        </View>
      </View>
      <View className='p-3 gray-300 rounded-full'>
        <Icon.Sliders height='20'width='20'strokeWidth={2.5} stroke='white'/>
      </View>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}