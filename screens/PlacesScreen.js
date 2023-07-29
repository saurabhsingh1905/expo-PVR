import {
    FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext, useEffect, useLayoutEffect,useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Place } from "../PlaceContext";
import { AntDesign } from '@expo/vector-icons';
import { client } from "../expopvr-sanity/sanity";

const PlacesScreen = () => {
const navigation = useNavigation();
const [cities,setCities] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={{ fontSize: 15, letterSpacing: 1 }}>
            CHANGE LOCATION
          </Text>
        </Pressable>
      ),
    });
  }, []);

  const { selectedCity, setSelectedCity,locationId,setLocationId } = useContext(Place);

  const places = [
    {
      id: "0",
      place: "Bangalore",
      image:
        "https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "1",
      place: "Ahmedabad",
      image:
        "https://images.pexels.com/photos/6813041/pexels-photo-6813041.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "2",
      place: "Chennai",
      image:
        "https://images.pexels.com/photos/10070972/pexels-photo-10070972.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "3",
      place: "Delhi - NCR",
      image:
        "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "4",
      place: "Hyderabad",
      image:
        "https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "5",
      place: "Kolkata",
      image:
        "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "6",
      place: "Jaipur",
      image:
        "https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "7",
      place: "Lucknow",
      image:
        "https://images.pexels.com/photos/15351642/pexels-photo-15351642.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  
  
  ];

  useEffect(()=>{
    const fetchData = async ()=> {
      const result = await client.fetch(`*[
        _type == "location"
      ]`)
      setCities(result)
    }
    fetchData()
  },[])

  const selectCity = (city,locationId)=> {
setSelectedCity(city)
setLocationId(locationId)
setTimeout(() => {
    navigation.navigate("HomeScreen")
}, 800);
  }
  console.log(cities)

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          padding: 10,
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "#C0C0C0",
          borderWidth: 2,
          borderRadius: 30,
        }}
      >
        <TextInput placeholder="Search Your City" />
        <Ionicons name="search" size={24} color="black" />
      </View>

      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Selected Location</Text>
        <Text>{selectedCity}</Text>
      </View>
    <FlatList
        numColumns={2}
        columnWrapperStyle={{justifyContent:"space-between"}}
        data={cities}
        renderItem={({ item, index }) => (

          <Pressable style={{marginVertical:10,marginHorizontal:10}} onPress={()=> selectCity(item.city,item._id)}>
            <ImageBackground
              source={{ uri: item.image }}
              style={{ width: 160, height: 100,opacity:0.8 }}
              imageStyle={{ borderRadius: 8 }}
            >
                 {selectedCity === item.place && (
                <View style={{flex:1,marginLeft:7,marginTop:7,alignContent:"flex-start"}}>
                    <AntDesign name="checkcircle" size={24} color="white" />
                </View>
            )}

                <View style={{flex:1,marginLeft:7,justifyContent:"flex-end"}}>
                    <Text style={{color:"white",fontWeight:700}}>{item.city}</Text>
                </View>
            </ImageBackground>
           
          </Pressable>
        )}
      />
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
