import React from "react";
import { View, Text, Button } from "react-native";

export function AboutScreen(props: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About</Text>
      <Button
        title="Back"
        onPress={() => {
          props.navigation.pop();
          // debugger;
          // props.navigation.back();
        }}
      />
    </View>
  );
}
