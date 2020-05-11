import React from "react";
import { Image, Platform, TouchableOpacity, Text, View } from "react-native";
import styles from "../public/style";
import axios from "axios";
import key from "../secrets";

let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka";

export default class PopularDrinks {
  constructor() {
    this.state = {
      list: [],
    };
  }
  async componentDidMount() {
    let res = await axios.get(url);
    console.log(res.data);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          All Drinks
          {this.state.list.length > 0
            ? this.state.list.map((drink) => {
                <Text>{drink}</Text>;
              })
            : null}
        </Text>
      </View>
    );
  }
}
