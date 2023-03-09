import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

const HomeScreen = () => {
  console.log("Homescreen started");

  return (
    <SafeAreaView style={tw`border-2 border-blue-500 bg-white h-full`}>
      {/* <Text style={[tw`text-red-500 p-10`, styles.text]}>HomeScreen</Text> */}
      <View style={tw`border border-red-500 p-5`}>
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
    </SafeAreaView>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  text : {
    color : "blue",
  },
});