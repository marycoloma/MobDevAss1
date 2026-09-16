import { View, Text, Image, Button, Alert, StyleSheet } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Mary Ann Coloma</Text>
      <Text style={styles.name}>Jan 24, 2017</Text>
      <Image
        source={require("../../assets/myphoto.jpg")}
        style={styles.photo}
      />
    </View>
  );
}
