import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import MoviePoster from "./MoviePoster";

const MovieItem = ({ title, year, poster, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MoviePoster source={poster} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 0.5,
  },
  info: {
    marginLeft: 15,
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  year: {
    fontSize: 14,
    color: "#777",
  },
});

export default MovieItem;
