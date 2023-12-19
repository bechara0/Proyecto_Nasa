import { StyleSheet, SafeAreaView, Platform } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
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
