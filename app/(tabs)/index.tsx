import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Spotibai</Text>
      </View>

      <View style={styles.musicSection}>
        <Text style={styles.musicTitle}>Your Music</Text>

        <Text style={styles.addMusic}>+ Add Music</Text>
      </View>

      <View style={styles.emptyMusic}>
        <Text style={styles.emptyTitle}>No music yet</Text>

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
});
