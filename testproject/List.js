import React from "react";
import { Text, StyleSheet, ScrollView, View, FlatList } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";

export default function ListContainer(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {props.data == null ? null : (
          <FlatList
            data={Object.values(props.data)}
            renderItem={({ item }) => <_ListItem {...props} {...item} />}
            keyExtractor={item => item.id}
          />
        )}
      </ScrollView>
    </View>
  );
}

function _ListItem(props) {
  return (
    <View style={styles.listItem}>
      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color={props.isDone ? "#4087d6" : "#e3e3e3"}
          />
        }
        buttonStyle={styles.listButton}
        onPress={() => {
          props.onPressDone(props.id);
        }}
      />
      <Text
        style={{
          flex: 2,
          margin: 10,
          marginLeft: 0,
          textDecorationLine: props.isDone ? "line-through" : "none"
        }}
      >
        {props.title}
      </Text>
      <Button
        icon={<Icon name="edit" size={15} color="#4087d6" />}
        buttonStyle={styles.listButton}
        onPress={() => {
          props.onPressEdit(props.id, props.title);
        }}
      />
      <Button
        icon={<Icon name="remove" size={15} color="#4087d6" />}
        buttonStyle={styles.listButton}
        onPress={() => {
          props.onPressRemove(props.id);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    borderColor: "#4087d6",
    borderWidth: 0.5,
    margin: 15,
    borderRadius: 20,
    flexDirection: "column",
    padding: 5
  },
  listItem: {
    flex: 1,
    flexDirection: "row"
  },
  listButton: {
    backgroundColor: "white",
    margin: 5
  }
});
