import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import estilos from './estilos/EstilosTelaPrincipal'
import estilosHistoricoGastos from './estilos/EstilosHistoricoGastos'

const HistoricoGastos = () => {
  const [gastos, setGastos] = useState({})
  const [mesAtual, setMesAtual] = useState('')
  const [mesAnterior, setMesAnterior] = useState('')

  useEffect(() => {
    const carregarGastos = async () => {
      const hoje = new Date()

      // Formata adequadamente o mês atual e anterior
      const mes = hoje.getMonth() + 1
      const ano = hoje.getFullYear()
      const mesFormatado = `${mes}`.padStart(2, '0') + '/' + ano
      setMesAtual(mesFormatado)

      // Lida com mudança de ano (jan → dez do ano anterior)
      const mesAnterior = mes === 1 ? { mes: 12, ano: ano - 1 } : { mes: mes - 1, ano }
      const mesAntFormatado = `${mesAnterior.mes}`.padStart(2, '0') + '/' + mesAnterior.ano
      setMesAnterior(mesAntFormatado)

      // Busca do armazenamento
      const dados = await AsyncStorage.getItem('historico_gastos')
      if (dados) {
        setGastos(JSON.parse(dados))
      }
    }

    carregarGastos()
  }, [])

  return (
    <View style={[estilos.PlanoDeFundo, { padding: 20, backgroundColor: '#FF0000' }]}>
      <View style={[estilosHistoricoGastos.bloco]}>
        <Text style={[estilosHistoricoGastos.titulo]}>Gastos do mês atual ({mesAtual}):</Text>
        <Text style={[estilosHistoricoGastos.valor]}>R$ {gastos[mesAtual]?.toFixed(2) || '0,00'}</Text>
      </View>

      <View style={[estilosHistoricoGastos.bloco]}>
        <Text style={[estilosHistoricoGastos.titulo]}>Gastos do mês anterior ({mesAnterior}):</Text>
        <Text style={[estilosHistoricoGastos.valor]}>R$ {gastos[mesAnterior]?.toFixed(2) || '0,00'}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bloco: {
    marginBottom: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 4,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  valor: {
    fontSize: 22,
    color: '#008000',
  },
})

export default HistoricoGastos