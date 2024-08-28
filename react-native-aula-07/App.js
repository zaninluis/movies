import React from "react";
import { Alert, TouchableOpacity } from "react-native";
import MovieList from "./src/components/MovieList";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Filmes from "./src/pages/Filmes";
import Detalhes from "./src/pages/Detalhes";
import Teste from "./src/pages/Teste";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "red",
          },
        }}
      >
        <Stack.Screen
          component={Filmes}
          name={"Filmes"}
          options={{
            headerTitle: "Meus filmes",
            headerTitleAlign: "center",
            headerRight: () => (
              <TouchableOpacity onPress={() => Alert.alert("Teste")}>
                <Ionicons name="exit" size={25} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          component={Detalhes}
          name={"Detalhes"}
          options={{
            headerTitle: "Detalhes do filme",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
