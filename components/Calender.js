import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import Date from "../components/Date"

const Calender = ({ selected, onSelected }) => {
  const [dates, setDates] = useState([]);
  const getDates = () => {
    const myDates = [];
    for (let i = 0; i < 5; i++) {
      const date = moment().add(i, "days");
      myDates.push(date);
    }
    setDates(myDates);
  };

  useEffect(() => {
    getDates();
  }, []);
 // console.log(dates);

  return (
    <ScrollView horizontal>
      {dates.map((date, index) => (
       
        <Date  date={date}
        key={index}
        selected={selected}
        onSelectDate={onSelected} />
      ))}
    </ScrollView>
  );
};

export default Calender;

const styles = StyleSheet.create({});
