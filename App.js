import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text, ScrollView } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form"

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Купити молоко", key: "1" },
    { text: "Купити хліб", key: "2" },
    { text: "Купити яблука", key: "3" },
    { text: "Купити масло", key: "4" },
  ])
  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text: text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <View >
      <Header />
      <Form addHandler={addHandler} />
      <FlatList data={listOfItems} renderItem={({ item }) => (
        <ListItem el={item} deleteHandler={deleteHandler} />
      )} />
    </View>
  );
}
const styles = StyleSheet.create({

})




