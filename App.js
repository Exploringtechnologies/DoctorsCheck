import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mainpage from './Screen/Mainpage';

export default function App() {
  return (
    <View style={styles.container}>
      <Mainpage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#70bb7d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
