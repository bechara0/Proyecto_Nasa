import { StyleSheet, SafeAreaView, Platform } from "react-native";
import Home from "./src/views/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" && 30,
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
  },
});
