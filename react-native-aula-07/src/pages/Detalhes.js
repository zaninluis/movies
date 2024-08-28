import { View, Text, Image, Button } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";

export default function Detalhes({ navigation, route }) {
  const { movie } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: movie.title });
  }, []);

  return (
    <View>
      <Image source={{ uri: movie.poster }} height={160} width={120} />
      <Text>{movie.title}</Text>
      <Text>{movie.year}</Text>
      <Text>{movie.description}</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.setOptions({ title: movie.title })}
      />
    </View>
  );
}
