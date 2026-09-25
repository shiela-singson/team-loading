import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [song, setSong] = useState<{
    name: string;
    uri: string;
  } | null>(null);
  const player = useAudioPlayer();
  const status = useAudioPlayerStatus(player);
  const addMusic = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "audio/*",
    });

    if (result.canceled) {
      return;
    }
    const selectedSong = result.assets[0];

    setSong({
      name: selectedSong.name,
      uri: selectedSong.uri,
    });
    player.replace(selectedSong.uri);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Spotibai</Text>
      </View>

      {/* Your Music */}
      <View style={styles.musicSection}>
        <Text style={styles.musicTitle}>Your Music</Text>

        <Pressable onPress={addMusic}>
          <Text style={styles.addMusic}>+ Add Music</Text>
        </Pressable>
      </View>

      {/* Empty Music Area */}
      <View style={styles.emptyMusic}>
        <Text style={styles.emptyTitle}>
          {song ? song.name : "No music yet"}
        </Text>

        {song && (
          <Pressable
            onPress={() => {
              if (status.playing) {
                player.pause();
              } else {
                player.play();
              }
            }}
          >
            <Text style={styles.playButton}>
              {status.playing ? "⏸ Pause" : "▶ Play"}
            </Text>
          </Pressable>
        )}

        <Text style={styles.emptyText}>
          Add your downloaded songs to Spotibai.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  header: {
    marginTop: 60,
    alignItems: "center",
  },

  title: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
  },

  musicSection: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  musicTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },

  addMusic: {
    color: "#1DB954",
    fontSize: 15,
  },

  emptyMusic: {
    marginTop: 80,
    alignItems: "center",
    paddingHorizontal: 30,
  },

  emptyTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },

  emptyText: {
    color: "#888888",
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },

  playButton: {
    color: "#1DB954",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
  },
});
