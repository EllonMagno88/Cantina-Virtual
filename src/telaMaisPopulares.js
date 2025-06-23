import  { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import estilos from './estilos/EstilosTelaPrincipal'
import estilosMaisPopulares from './estilos/EstilosMaisPopulares'

const MaisPopulares = () => {
  const [ranking, setRanking] = useState([])

  useEffect(() => {
    const calcularMaisPopulares = async () => {
      const historico = await AsyncStorage.getItem('historico_pedidos')
      if (!historico) return

      const lista = JSON.parse(historico)

      const contagem = {}

      // Conta quantas vezes cada item foi pedido
      for (const item of lista) {
        const chave = item.nome 

        if (!contagem[chave]) {
          contagem[chave] = {
            ...item,
            quantidade: 1,
          }
        } else {
          contagem[chave].quantidade += 1
        }
      }

      // Transforma em array e ordena por quantidade
      const ordenado = Object.values(contagem).sort((a, b) => b.quantidade - a.quantidade)

      setRanking(ordenado)
    }

    calcularMaisPopulares()
  }, [])

  return (
    <View style={[estilos.PlanoDeFundo, {backgroundColor: '#FF0000',}]}>
      <FlatList
        data={ranking}
        keyExtractor={(item) => item.nome}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <View style={[estilosMaisPopulares.itemContainer]}>
            <Image source={{ uri: item.imagem }} style={[estilosMaisPopulares.imagem]} />
            <View>
              <Text style={[estilosMaisPopulares.nome]}>{item.nome}</Text>
              <Text style={[estilosMaisPopulares.preco]}>{item.preco}</Text>
              <Text style={[estilosMaisPopulares.quantidade]}>{item.quantidade} pedidos</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}



export default MaisPopulares
