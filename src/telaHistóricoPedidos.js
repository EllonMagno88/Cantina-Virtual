import { useNavigation } from '@react-navigation/native'
import { useState, useEffect,  } from 'react'
import { Text,  View, Image, FlatList, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import estilosTelaPrincipal from './estilos/EstilosTelaPrincipal'

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
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>{item.preco}</Text>
              <Text style={styles.data}>{item.data}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  imagem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  data: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
})

export default HistoricoPedidos
        