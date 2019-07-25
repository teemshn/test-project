/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import uuidv4 from "uuid/v4";
import EditTodo from "./EditTodo.js";
import List from "./List.js";
import { Button } from "react-native-elements";

const App = () => {
  const [todolist, setTodolist] = useState(null);

  async function _SaveTodolist() {
    try {
      const test = JSON.stringify(todolist);
      await AsyncStorage.setItem("poe", test);
      return true;
    } catch (error) {
      console.log("Error saving data : " + error);
      return false;
    }
  }

  async function _LoadTodolist() {
    try {
      const data = await AsyncStorage.getItem("poe");
      const parseData = JSON.parse(data);
      setTodolist(parseData);
      return true;
    } catch (error) {
      console.log("Error saving data : " + error);
      return false;
    }
  }

  useEffect(() => {
    _LoadTodolist();
  }, []);

  useEffect(() => {
    _SaveTodolist();
    console.log(todolist);
  }, [todolist]);

  async function onPressAdd(str) {
    const uuid = uuidv4();
    await setTodolist({
      ...todolist,
      [uuid]: {
        id: uuid,
        title: str,
        isDone: false,
        createDate: Date.now(),
        doneDate: null
      }
    });
  }

  function onPressEdit(id, str) {
    setTodolist({ ...todolist, [id]: { ...todolist[id], title: str } });
  }

  function onPressRemove(id) {
    const newobj = todolist;
    delete newobj[id];
    setTodolist({ ...newobj });
  }

  function onPressDone(id) {
    setTodolist({
      ...todolist,
      [id]: { ...todolist[id], isDone: !todolist[id].isDone }
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>TodoList</Text>
      <EditTodo onPressAdd={onPressAdd} />
      <List
        onPressEdit={onPressEdit}
        onPressRemove={onPressRemove}
        onPressDone={onPressDone}
        data={todolist}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  },
  Title: {
    flex: 2,
    marginTop: 100,
    fontSize: 50,
    color: "#4087d6",
    textAlign: "center"
  }
});

export default App;
