import React from "react";
import { View, Text, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function HomeScreen(props: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <Button
        title="Go to About"
        onPress={() => props.navigation.navigate("About")}
      />
    </View>
  );
}
