import React from 'react'
import {Text} from 'react-native'
const MostrarTemp = (props) => {
    const tempo = props.tempo
    const minuto = Math.round(tempo / 60)
    const segundo = tempo % 60
    const minutoSeg = minuto < 10 ? '0' + minuto : segundo
    const segundoStr = segundo < 10? '0' + segundo : segundo 
    return ( <>
        <Text> {`${minutoSeg}: ${segundoStr}` }  <br/>
      Tempo Médio por volta.
      </Text>
   </> )

}

export default MostrarTemp