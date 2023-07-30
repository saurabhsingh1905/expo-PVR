import { BackHandler, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ConfirmationScreen = () => {
  const route = useRoute();
  //  console.log(route.params);
  const navigation = useNavigation();

  const cart = useSelector((state) => state.cart.cart);

  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  //console.log(total);

  const ticketPrice = route.params.selectedSeats.length * 220;
  const fee = 87;
  const grandTotal = ticketPrice + fee + total;
  // console.log(grandTotal)

  const pay = ()=>{

  }

  useLayoutEffect(() => {
    navigation.setOptions({
      gestureEnabled: false,
      gestureDirection: "horizontal",
    });
  }, []);

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        "Want to end Session",
        "Go back to main screen",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () =>
              navigation.reset({ index: 0, routes: [{ name: "HomeScreen" }] }),
          },
        ],
        { cancelable: false }
      );

      // return true;
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    };
  }, []);


  return (
    <View style={{ padding: 20 }}>
      <View style={{ backgroundColor: "white", padding: 10, borderRadius: 6 }}>
        <View>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            {route.params.name}
          </Text>
          <Text style={{ marginVertical: 4, color: "gray" }}>
            U * A English
          </Text>
          <Text>{route.params.selectedDate}</Text>
        </View>

        <View
          style={{
            height: 1,
            borderColor: "#C0C0C0",
            borderWidth: 1,
            marginTop: 6,
          }}
        />

        <View style={{ marginTop: 8 }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            {route.params.mall}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              marginTop: 4,
              color: "gray",
            }}
          >
            AUDI Q2 * CLASSIC
          </Text>
          <Text style={{ color: "red", marginTop: 4, fontWeight: "500" }}>
            {route.params.seats} | {route.params.showtime}
          </Text>
        </View>
        <View
          style={{
            height: 1,
            borderColor: "#C0C0C0",
            borderWidth: 1,
            marginTop: 6,
          }}
        />
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16 }}>TOTAL **incl convi. fees</Text>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            ₹{grandTotal}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            TICKETS {route.params.selectedSeats.length}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            ₹{route.params.selectedSeats.length * 220}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            FOOD & BEVERAGES
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>₹{total}</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          {cart.map((item, index) => (
            <View style={{ gap: 6 }} key={index}>
              <Text style={{}}>{item.name}</Text>
            </View>
          ))}
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            Convinience Fee
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>₹87</Text>
        </View>
      </View>

      <Pressable
      onPress={pay}
        style={{
          marginTop: 10,
          backgroundColor: "#FFC72C",
          padding: 10,
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{fontSize:15,fontWeight:"500"}}>PAY</Text>
      </Pressable>
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({});
