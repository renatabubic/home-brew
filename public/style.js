import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemName: {
    color: "#888",
    fontSize: 18,
    fontWeight: "bold",
  },
  itemText: {
    color: "#888",
    fontSize: 15,
  },
  logo: {
    width: 205,
    height: 250,
  },
  title: {
    color: "#888",
    fontSize: 30,
  },
  button: {
    marginTop: 20,
    backgroundColor: "coral",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    borderWidth: 5,
    borderColor: "coral",
    borderRadius: 180,
  },
  itemContainer: {
    paddingTop: 50,
    flex: 1,
    // backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
