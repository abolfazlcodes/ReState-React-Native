import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const PropertiesScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>PropertiesScreen {id}</Text>
    </View>
  );
};

export default PropertiesScreen;
