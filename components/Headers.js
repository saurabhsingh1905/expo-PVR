import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";

const Headers = () => {
  return (
    <View style={{marginBottom:55}}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/564x/e5/a1/89/e5a1892d2f79b6bcb7304d0fb9395e7d.jpg",
        }}
        style={{ height: 200, resizeMode: "contain" }}
      >
        <Pressable
          style={{
            height: 90,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 5,
            width: "90%",
            top: 160,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <View>
            <Text style={{fontSize:15,fontWeight:"500"}} >Releasing in 1 day</Text>
            <Text style={{marginVertical:5,fontSize:16,fontWeight:"700"}} >CUSTODY</Text>
            <Text style={{fontSize:15,color:"gray",fontWeight:"500"}} >U.A * HINDI</Text>
            </View>
          <Pressable style={{backgroundColor:"#ffc40c",padding:10,borderRadius:6,marginRight:10}}>
            <Text>BOOK</Text>
          </Pressable>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({});
