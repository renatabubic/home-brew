import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//views
import PopularDrinks from "./views/PopularDrinks";
// import MyList from "./views/MyList";

//styling
import styles from "./public/style";
import logo from "./public/assets/icon.png";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Home Brew</Text>
      <Text style={styles.instructions}>Start mixing...</Text>
      <Text style={styles.instructions}>Then start drinking</Text>
    </View>
  );
}
function MyList() {
  return (
    <View style={styles.container}>
      <Text>My List of Favs</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Popular" component={PopularDrinks} />
        <Tab.Screen name="My List" component={MyList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
