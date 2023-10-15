
import { StyleSheet, Text, View } from "react-native";
import RootComponent from "./src/views";

export default function App() {
  return (
    <View style={styles.container}>
      <RootComponent/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
