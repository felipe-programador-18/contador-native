import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,Button, Touchable} from 'react-native';
import MostrarTemp from './MostarTempo';
import MostrarVoltas from './Mostrarvoltar';

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
      }, 100);
    } 
    return () => {
      if(timer){
        clearInterval(timer)
      }
    }
  }, [running])
  //create two function to adding increment and decrement
  const Increment = () => {
    setnumber(num+1)
  }
  const Decrement = () => {
    if(num >0){
      setnumber(num-1)
    }
  }

  //create another function to toggle command
  const ToggleRun =() => {
    setrunning(!running)
  }
  
  const reset = () =>{
    setnumber(0)
    settime(0)
  }
  


  return (
    <View style={styles.container}>
     <MostrarVoltas voltas={num}/>
      <View style ={styles.inside}>
      <Button style={styles.button1}  onPress={Increment} title='+'/>
      <Button style={styles.button2}  onPress={Decrement} title='-'/>
      
      {num> 0 && 
      <MostrarTemp tempo={Math.round(time/num)} />  
      } 

      <Button onPress={ToggleRun} title={running ? 'Pausar':'Iniciar'} />
      <Button onPress={reset} title='Reiniciar'/>
      </View>

    
      
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
   inside:{
   margin:150
   },


  button1:{
   width:100,
   padding: 30,
   marginVertical:39
   
  },
  button2:{
  padding:30,
  marginBottom:40,
  }
});
