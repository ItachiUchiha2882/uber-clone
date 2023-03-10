import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  console.log("Homescreen started");

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`border p-5`}> 
        <Image
          style={{
            width : 100, 
            height : 100,
            resizeMode : "contain",
          }}
          source={{
            uri : "https://links.papareact.com/gzs"
          }}
        />
      </View>
      <NavOptions/>
    </SafeAreaView>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  text : {
    color : "blue",
  },
});