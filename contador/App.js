import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [num, setnumber] = useState(0)
  const [running, setrunning] = useState(false)
  const [time, settime] = useState(0)
  
  // create useEffect to manage hoock later loading page
  useEffect(()=> {
    let timer = null
    if(running){
      timer = setInterval(() => {
         settime(old => old +1)
      }, 1000);
    }
  })


  const Increment = () => {
    setnumber(num+1)
  }
  const Decrement = () => {
    if(num >0){
      setnumber(num-1)
    }
  }


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
