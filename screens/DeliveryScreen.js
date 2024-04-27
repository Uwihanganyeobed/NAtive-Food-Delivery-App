import { View, Text } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { useNavigation } from '@react-navigation/native';
import MapView, {Marker} from 'react-native-maps';
import { themeColors } from '../theme';
export default function DeliveryScreen() {
   const restaurant=featured.restaurant[0];
   const navigation=useNavigation();
  return (
    <View className='flex-1'>
      {/* map view */}
      <MapView
      initialRegion={{
         latitude: restaurant.lat,
         longitude: restaurant.lng,
         latitudeDelta: 0.01,
         longitudeDelta: 0.01
      }}
      className='flex-1'
      mapType='standard'>
         <Marker coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
         }}
         title={restaurant.name}
         description={restaurant.description}
         pinColor={themeColors.bgColor(1)}
         />
      </MapView>
    </View>
  )
}