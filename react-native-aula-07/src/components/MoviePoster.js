import React from "react";
import { Image, StyleSheet, View } from "react-native";

const MoviePoster = ({ source }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: source }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: 120,
    height: 160,
    resizeMode: "cover",
  },
});

export default MoviePoster;
