import React from 'react'
import {Text} from 'react-native'
const MostrarVoltas = (props) => {
  return(<>
      <Text>
          <span>{props.voltas}</span>
          <br/>
          Voltas
      </Text>
  </>)
}

export default MostrarVoltas