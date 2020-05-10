import React from "react";
import { Image, Platform, TouchableOpacity, Text, View } from "react-native";
import logo from "./public/assets/icon.png";
import styles from "./public/style";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import uploadToAnonymousFilesAsync from "anonymous-files";

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    if (Platform.OS === "web") {
      let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      setSelectedImage({ localUri: pickerResult.uri, remoteUri });
    } else {
      setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
    }
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(
        `The image is available for sharing at: ${selectedImage.remoteUri}`
      );
      return;
    }

    Sharing.shareAsync(selectedImage.remoteUri || selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Brew</Text>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>Start mixing...</Text>
      <Text style={styles.instructions}>Then start drinking</Text>

      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>What's in your bar cart?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick an Image</Text>
      </TouchableOpacity>
    </View>
  );
}
