import { Button, SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import React from "react";
import MovieList from "../components/MovieList";
import MovieItem from "../components/MovieItem";
import { movies } from "../../movies";

export default function Filmes({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerList}>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <MovieItem
              title={item.title}
              year={item.year}
              poster={item.poster}
              onPress={() => navigation.navigate("Detalhes", { movie: item })}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: "#f5f5f5",
  },
  containerList: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
  },
  listHeader: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginTop: 10,
  },
  listHeaderText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
