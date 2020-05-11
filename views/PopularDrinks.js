import React from "react";
import { Image, FlatList, TouchableOpacity, Text, View } from "react-native";
import styles from "../public/style";
import axios from "axios";
import key from "../secrets";

const url = `https://www.thecocktaildb.com/api/json/v2/${key}/popular.php`;

function ItemTile({ item }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.strDrink}</Text>
      <Text style={styles.itemText}>Base: {item.strIngredient1}</Text>
      <Image source={{ url: item.strDrinkThumb }} style={styles.thumbnail} />
    </View>
  );
}

export default class PopularDrinks extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  async componentDidMount() {
    let res = await axios.get(url);
    this.setState({ list: res.data.drinks });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.list.length > 0 ? (
          <FlatList
            data={this.state.list}
            renderItem={({ item }) => <ItemTile item={item} />}
            keyExtractor={(item) => item.id}
            // style={styles.itemContainer}
          />
        ) : (
          <Text>No Drinks to Display</Text>
        )}
      </View>
    );
  }
}
