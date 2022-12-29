// import { StatusBar } from 'expo-status-bar';
import StopWatch from './components/StopWatch';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StopWatch/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
  },
});
