import { useNavigation } from '@react-navigation/native'
import { useState, useEffect,  } from 'react'
import { Text,  View, Image, FlatList, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import estilosTelaPrincipal from './estilos/EstilosTelaPrincipal'
import estilosHistoricoPedidos from './estilos/EstilosHistoricoPedidos'

const HistoricoPedidos = () => {
    const [pedidos, setPedidos] = useState([])
      

    useEffect(() => {
        const carregarHistorico = async () => {
            const historico = await AsyncStorage.getItem('historico_pedidos')
            if (historico) {
                setPedidos(JSON.parse(historico).reverse()) // Inverte a ordem para mostrar os pedidos mais recentes primeiro
            }
        }

        carregarHistorico()
       }, [])

    

       return (
        <View style={[estilosTelaPrincipal.PlanoDeFundo, {backgroundColor: '#FF0000'}]}>

        <FlatList
        data={pedidos}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <View style={[estilosHistoricoPedidos.itemContainer]}>
            <Image source={{ uri: item.imagem }} style={[estilosHistoricoPedidos.imagem]} />
            <View>
              <Text style={[estilosHistoricoPedidos.nome]}>{item.nome}</Text>
              <Text>{item.preco}</Text>
              <Text style={[estilosHistoricoPedidos.data]}>{item.data}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}



export default HistoricoPedidos
        