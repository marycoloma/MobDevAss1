import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function PhotoViewer() {
  return (
    <View style={styles.screen}>
      {/* top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Text style={styles.icon}>✕</Text>
        </TouchableOpacity>

        <Text style={styles.counter}>215 of 247</Text>

        <View style={styles.topIcons}>
          <Text style={styles.icon}>🏷️</Text>
          <Text style={styles.icon}>📍</Text>
          <Text style={styles.icon}>⋯</Text>
        </View>
      </View>

      {/* main photo */}
      <Image
        source={require("../../assets/myphoto.jpg")}
        style={styles.mainPhoto}
      />

      {/* caption footer */}
      <View style={styles.footer}>
        <Text style={styles.name}>Mary Ann Coloma</Text>
        <Text style={styles.date}>Jan 24, 2017 · 👥</Text>
        <Text style={styles.caption}>Jhungie Tendero Photography</Text>

        <View style={styles.engagementRow}>
          <Text style={styles.engagementText}>👍 347 💬 127 ➦ 1</Text>
          <Text style={styles.reactionEmoji}>👍❤️😮</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000",
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  icon: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 14,
  },
  counter: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
  topIcons: {
    flexDirection: "row",
  },

  mainPhoto: {
    flex: 1,
    width: "100%",
  },

  footer: {
    backgroundColor: "#000",
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
  },
  name: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
  date: {
    color: "#ccc",
    fontSize: 13,
    marginTop: 2,
  },
  caption: {
    color: "#fff",
    fontSize: 15,
    marginTop: 8,
  },

  engagementRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },
  engagementText: {
    color: "#ccc",
    fontSize: 14,
  },
  reactionEmoji: {
    fontSize: 16,
  },
});
