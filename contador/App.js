import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [num, setnumber] = useState(0)
  return (
    <View style={styles.container}>
      <Text> started new project counter number of steps </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#312A28',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
