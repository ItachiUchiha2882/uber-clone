import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://Links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://Links.papareact.com/28w",
    screen: "EatsScreen", // Change in future...
  },
];

const NavOptions = () => {
  console.log("NavOptions started");

  return (
    <FlatList
      data = {data}
      horizontal
      keyExtractor = {(item) => item.id}
      renderItem = {({ item }) => (
        <TouchableOpacity style={tw`border`}>
          <View style={tw`border bg-gray-200 p-5 m-4 w-45`}>
            <Image
              style = {{
                width : 120, 
                height : 120,
                resizeMode : "contain",
              }}
              source = {{uri : item.image}}
            />
            <Text style = {tw`mt-3 text-xl font-semibold`}>{item.title}</Text>
            <Icon 
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name='arrowright' color="white" type='antdesign'  
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;