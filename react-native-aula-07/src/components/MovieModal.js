import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import MovieDetails from "./MovieDetails";
import MoviePoster from "./MoviePoster";

const MovieModal = ({ visible, onClose, movie }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.header}>
              <MoviePoster source={movie.poster} style={styles.poster} />
            </View>
            <MovieDetails movie={movie} />
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    width: "90%",
    height: "70%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  scrollView: {
    flexGrow: 1,
    width: "100%",
  },
  header: {
    alignItems: "center",
    marginBottom: 15,
  },
  poster: {
    width: 150,
    height: 225,
    borderRadius: 10,
    resizeMode: "cover",
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#007BFF",
    alignItems: "center",
    width: "100%",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MovieModal;
