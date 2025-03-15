import { Link } from "expo-router"
import { View, Text } from "react-native"
import { useState } from "react"

function index() {

  const [count, setCount] = useState(0)

  function handleAddition(){
    setCount((prev) => ++prev)
  }

  function handleSubstraction(){
    if(count > 0){
      setCount((prev)=> --prev)
    }
  }

  return (
    <View style={{
      backgroundColor: "red",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        color: 'white',
        fontSize: 20
      }}>Hello rana how are you doing today</Text>
      <Link href={'/about/'}>Navigate to about us</Link>

      <View style={{
        paddingTop: 10,
        flex: 1,
        flexDirection: 'row',
        gap: 12,
      }}>
        <Text style={{
          fontSize: 25
        }}
        onPress={() => handleAddition()}
        >+</Text>
        <Text style={{
          fontSize: 25
        }}>{count}</Text>
        <Text style={{
          fontSize: 25
        }}
        onPress={() => handleSubstraction()}
        >-</Text>
      </View>
    </View>
  )
}

export default index
