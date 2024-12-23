import { View, Text, TextInput, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";
import { useEffect, useState } from "react";
import { getFeaturedRestaurants } from "../api";

export default function HomeScreen() {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFeaturedRestaurants()
      .then((data) => {
        setFeaturedRestaurants(data);
      })
      .catch((err) => {
        console.error("Failed to fetch featured restaurants:", err);
        setError("Failed to load featured restaurants.");
      });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <Image
          source={require("../assets/user.jpg")}
          style={{ width: 40, height: 50, borderRadius: 15 }}
        />
      </View>
      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/* categories */}
        <Categories />
        {/* featured */}
        <View className="mt-5">
          {error ? (
            <Text>{error}</Text>
          ) : (
            featuredRestaurants.map((item, index) => {
              return (
                <FeaturedRow
                  key={index}
                  title={item.name}
                  restaurant={item.restaurants}
                  description={item.description}
                />
              );
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
