// EXERCIO PALETA DE CORES
// import React, {useState} from "react";
// import { View, Button, Text} from "react-native";

// export default function Abacaxi(){
//   const [red, setRed] = useState(0)
//   const [green, setGreen] = useState(0)
//   const [blue, setBlue] = useState(0)

//   function vermelho(){setRed(red+10)}
//   function azul(){setBlue(blue+10)}
//   function verde(){setGreen(green+10)}

//   return(
//     <View style={{backgroundColor: "rgb("+red+","+green+","+blue+")", flex: 1}}>
//       <Button title="RED"onPress={vermelho}/>
//       <Button title="GREEN"onPress={verde}/>
//       <Button title="BLUE"onPress={azul}/>
//     </View>
//   )
// }

//  Exercicio 02--------------------------------------------------------------------------------------------------------------------
import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Button,} from "react-native";
import styles from './Styles'

export default function Home() {
  const [resultado, setResultado] = useState('')
  const [Expressão, setExpressão] = useState('')

  const calcular = ()=>{
    setResultado(eval(Expressão))
  }
  return (
    <View style={styles.container}>
      <View>
        <TextInput
        placeholder="Expressão"
        style={styles.caixa1}
        onChangeText={(e)=>{setExpressão(e)}}
        />
      </View>
      <View style={{padding:20}}>
        <TouchableOpacity 
        style={styles.botao}
           onPress={calcular}
        >
       

          <Text style={styles.botaoTxt}>=</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.caixa2}>
          <Text>{resultado}</Text>
        </View>

        <View>
          <Button
            title='Login'
            
           />
 
        </View>





      </View>
    

  )
}


