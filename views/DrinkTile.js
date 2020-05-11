import React from "react";
import { Image, Platform, TouchableOpacity, Text, View } from "react-native";

import styles from "../public/style";

export default DrinkTile = (props) => {
  let drink = props.drink;
  return (
    <View style={styles.container}>
      <Text>{drink.strDrink}</Text>
      <Image src={drink.strDrinkThumb} />
    </View>
  );
};
