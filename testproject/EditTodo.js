import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function EditTodo(props) {
  const [text, setText] = useState(0);

  return (
    <View style={styles.container}>
      <Input
        placeholder="목록을 작성하세요"
        containerStyle={styles.InputStyle}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        leftIconContainerStyle={{ marginRight: 10 }}
        leftIcon={<Icon name="edit" size={24} color="#4087d6" />}
        onChangeText={newtext => {
          setText(newtext);
        }}
      />
      <Button
        containertyle={{ flex: 1 }}
        buttonStyle={{ height: 50 }}
        title="추가하기"
        type="outline"
        onPress={() => {
          props.onPressAdd(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    margin: 10
  },
  InputStyle: {
    flex: 2,
    borderColor: "#4087d6",
    borderWidth: 0.5,
    borderRadius: 50,
    paddingLeft: 10,
    padding: 10,
    marginRight: 10
  }
});
