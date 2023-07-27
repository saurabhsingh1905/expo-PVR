import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import Calender from '../components/Calender';

const MovieScreen = () => {
const navigation =  useNavigation();
const  route= useRoute()
const [selectedDate,setSelectedDate] = useState()

    useLayoutEffect(() => {
        navigation.setOptions({
         headerTitle: route.params.title ,
          headerStyle: {
            backgroundColor: "#f5f5f5",
            shadowColor: "transparent",
            shadowOpacity: 0.3,
            shadowOffset: { width: -1, height: 1 },
            shadowRadius: 3,
          },
          
        });
      }, []);

  return (
    <ScrollView>
      <Calender selectedDate={selectedDate} onSelectDate={setSelectedDate} />
    </ScrollView>
  )
}

export default MovieScreen

const styles = StyleSheet.create({})