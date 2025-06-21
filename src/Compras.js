import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRoute } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const Compras = () => {
  const route = useRoute()
  const { comidas, bebidas } = route.params || {}
  const item = comidas || bebidas
  const [quantidade, setQuantidade] = useState(1)

  useEffect(() => {
    const carregarQuantidade = async () => {
      const valor = await AsyncStorage.getItem('quantidade_total')
      if (valor) {
        setQuantidade(parseInt(valor))
      }
    }
    carregarQuantidade()
  }, [])

  return (
    <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ff0000', flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{item.nome}</Text>
      <Image source={{ uri: item.imagem }} style={{ width: 100, height: 100, marginBottom: 10 }} />
      <Text style={{ fontSize: 20, marginBottom: 20 }}>{item.preco}</Text>

      <TouchableOpacity
        style={{ backgroundColor: 'green', padding: 15, borderRadius: 10 }}
        onPress={async () => {
          const novaQtd = quantidade + 1
          setQuantidade(novaQtd)
          await AsyncStorage.setItem('quantidade_total', novaQtd.toString())

          // Obtém a data atual
         const datalocal = new Date()
          const pedidoComData = {
            ...item, 
            data: datalocal.toLocaleString(),
          }

          //Salva o ultimo pedido com a data no AsyncStorage
          await AsyncStorage.setItem('ultimo_pedido', JSON.stringify(pedidoComData))

          // Atualiza o histórico de pedidos
          const historico = await AsyncStorage.getItem('historico_pedidos')
          const lista = historico ? JSON.parse(historico) : []
          lista.push(pedidoComData)
          await AsyncStorage.setItem('historico_pedidos', JSON.stringify(lista))

          // Atualiza o histórico de gastos mensais

          // Extrai mês e ano atual
          const mesAno = `${datalocal.getMonth() + 1}`.padStart(2, '0') + '/' + datalocal.getFullYear()

          // Extrai o número (float) do valor, ex: "R$ 10,00" → 10.00
          const valorNumerico = parseFloat(item.preco.replace('R$', '').replace(',', '.'))

          // Busca o registro atual de gastos
          const gastosArmazenados = await AsyncStorage.getItem('historico_gastos')
          //Verifica se já existe um registro de gastos, caso não exista, cria um objeto vazio
          const gastos = gastosArmazenados ? JSON.parse(gastosArmazenados) : {}

          // Atualiza o total do mês correspondente
          gastos[mesAno] = (gastos[mesAno] || 0) + valorNumerico

          // Salva de volta
          await AsyncStorage.setItem('historico_gastos', JSON.stringify(gastos))

          if (novaQtd === 1) {
            await AsyncStorage.setItem('primeiraCompra', 'true')
            alert('Parabéns! Você desbloqueou a conquista "Primeira Compra"')
          }

          if (novaQtd === 50) {
            await AsyncStorage.setItem('cinquentaCompras', 'true')
            alert('Parabéns! Você desbloqueou a conquista "Cliente Fiel"')
          }

          if (novaQtd !== 1 && novaQtd !== 50) {
            alert(`Pedido de "${item.nome}" finalizado!`)
          }
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
