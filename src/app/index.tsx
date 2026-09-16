import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.card}>
      {/* profile header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/myphoto.jpg")}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Mary Ann Coloma</Text>
          <Text style={styles.date}>Jan 24, 2017 ·</Text>
        </View>
      </View>

      {/* main photo */}
      <Image
        source={require("../../assets/myphoto.jpg")}
        style={styles.mainPhoto}
      />

      {/* reactions */}
      <View style={styles.engagementRow}>
        <Text style={styles.engagement}>❤️ 347</Text>
        <Text style={styles.engagement}>💬 127</Text>
        <Text style={styles.engagement}>🔁 1</Text>
      </View>

      {/* button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("This is Mary's first assignment!")}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    color: "gray",
  },

  mainPhoto: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    marginVertical: 10,
  },

  engagementRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  engagement: {
    fontSize: 16,
  },

  button: {
    backgroundColor: "#1877F2",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
