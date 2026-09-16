import { View, Text, Image, Button, Alert, StyleSheet } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Mary Ann Coloma</Text>
      <Text style={styles.name}>Jan 24, 2017</Text>
      <Image
        source={require("../../assets/myphoto.jpg")}
        style={styles.photo}
        <View style={styles.row}>
        <Text style={styles.engagement}>❤️ 347</Text>
        <Text style={styles.engagement}>💬 127</Text>
        <Text style={styles.engagement}>🔁 1</Text>
      </View>
        
        <Button
        title="Press Me"
        onPress={() => Alert.alert("This is Mary's first assignment!")}
      />
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    color: 'gray',
    marginBottom: 10,
  },
  photo: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
