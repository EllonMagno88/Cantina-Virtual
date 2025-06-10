import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRoute } from '@react-navigation/native'
import  React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, } from 'react-native'

const Compras = () => {
  const route = useRoute()
  const { comidas, bebidas } = route.params || {}

  // Escolhe o item que foi recebido
  const item = comidas || bebidas

  const [quantidade, setQuantidade] = useState(1)


  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{item.nome}</Text>
      <Image source={{ uri: item.imagem }} style={{ width: 100, height: 100, marginBottom: 10 }} />
      <Text style={{ fontSize: 20, marginBottom: 20 }}>{item.preco}</Text>

      <TouchableOpacity
        style={{ backgroundColor: 'green', padding: 15, borderRadius: 10 }}
        onPress={async () => {
          setQuantidade(quantidade + 1)

          if (quantidade === 1) {
            await AsyncStorage.setItem('primeiraCompra', 'true')
             alert('Parabéns! Você desbloqueou a conquista "Primeira Compra"')
          }

          if (quantidade === 50) {
            await AsyncStorage.setItem('cinquentaCompras', 'true')
            alert('Parabéns! Você desbloqueou a conquista "Cliente Fiel"')
          }

          if (quantidade !=1 && quantidade != 50) { alert(`Pedido de "${item.nome}" finalizado!`)}

        }}
         
        
      >
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
          Finalizar Pedido
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Compras




