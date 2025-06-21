import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useState, useEffect, use } from 'react'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity, Text, TextInput, View, Image, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, } from '@react-navigation/native'
import estilosTelaPrincipal from './estilos/EstilosTelaPrincipal'


const TelaPrincipal = () => {
  const { navigate } = useNavigation()
  const [pesquisa, setPesquisa] = useState('')
  const [menuAberto, setMenuAberto] = useState(false)
  const [ultimoPedido, setUltimoPedido] = useState(null)
  const [nome, setNome] = useState('')
  const catalogo = [

  // Comidas  
  { id: 'c1', nome: 'Hambúrguer com Batata Frita', preco: 'R$ 18,00', imagem: 'https://cdn-icons-png.flaticon.com/128/3075/3075977.png', tipo: 'comida'},
  { id: 'c2', nome: 'X-Salada', preco: 'R$ 15,00', imagem: 'https://cdn-icons-png.flaticon.com/128/1720/1720486.png', tipo: 'comida' },
  { id: 'c3', nome: 'X-Bacon com Cheddar', preco: 'R$ 20,00', imagem: 'https://cdn-icons-png.flaticon.com/128/12809/12809396.png', tipo: 'comida' },
  { id: 'c4', nome: 'Hot Dog com Batata Palha', preco: 'R$ 12,00', imagem: 'https://cdn-icons-png.flaticon.com/128/2102/2102354.png', tipo: 'comida' },
  { id: 'c5', nome: 'Misto Quente', preco: 'R$ 8,00', imagem: 'https://cdn-icons-png.flaticon.com/128/2821/2821805.png', tipo: 'comida' },
  { id: 'c6', nome: 'Sanduíche Natural de Frango', preco: 'R$ 10,00', imagem: 'https://cdn-icons-png.flaticon.com/128/9442/9442913.png', tipo: 'comida' },
  { id: 'c7', nome: 'Coxinha de Frango com Catupiry', preco: 'R$ 7,00', imagem: 'https://cdn-icons-png.flaticon.com/128/6882/6882214.png', tipo: 'comida' },
  { id: 'c8', nome: 'Pastel de Carne com Ovo', preco: 'R$ 9,00', imagem: 'https://cdn-icons-png.flaticon.com/128/12694/12694455.png', tipo: 'comida' },
  { id: 'c9', nome: 'Esfiha de Carne', preco: 'R$ 6,00', imagem: 'https://cdn-icons-png.flaticon.com/128/9633/9633365.png', tipo: 'comida' },
  { id: 'c10', nome: 'Pizza Mussarela (fatia)', preco: 'R$ 10,00', imagem: 'https://cdn-icons-png.flaticon.com/128/1404/1404945.png', tipo: 'comida' },

  // Bebidas
  { id: 'b1', nome: 'Refrigerante em Latinha', preco: 'R$ 5,00', imagem: 'https://cdn-icons-png.flaticon.com/128/735/735842.png', tipo: 'bebida' },
  { id: 'b2', nome: 'Agua Mineral sem gás', preco: 'R$ 2,50', imagem: 'https://cdn-icons-png.flaticon.com/128/824/824239.png', tipo: 'bebida' },
  { id: 'b3', nome: 'Agua mineral com gás', preco: 'R$ 3,00', imagem: 'https://cdn-icons-png.flaticon.com/128/824/824239.png', tipo: 'bebida' },
  { id: 'b4', nome: 'Milkshake de Chocolate', preco: 'R$ 9,00', imagem: 'https://cdn-icons-png.flaticon.com/128/659/659368.png', tipo: 'bebida' },
  { id: 'b5', nome: 'Refrigerante 600ml', preco: 'R$ 7,00', imagem: 'https://cdn-icons-png.flaticon.com/128/3076/3076028.png', tipo: 'bebida' },
  { id: 'b6', nome: 'Suco Natural de Laranja', preco: 'R$ 6,50', imagem: 'https://cdn-icons-png.flaticon.com/128/1687/1687077.png', tipo: 'bebida' },
]

const resultadosFiltrados = catalogo.filter(item =>
  item.nome.toLowerCase().includes(pesquisa.toLowerCase())
)

  // Carrega o último pedido toda vez que a tela volta ao foco
  useFocusEffect(
    useCallback(() => {
      const carregarUltimoPedido = async () => {
        const json = await AsyncStorage.getItem('ultimo_pedido')
        if (json) {
          setUltimoPedido(JSON.parse(json))
        }
      }
      carregarUltimoPedido()
    }, [])
  )

  useEffect(() => {
    const carregarNome = async () => {
      const nomeSalvo = await AsyncStorage.getItem('nome')
      if (nomeSalvo) {
        setNome(nomeSalvo)
      }
    }
    carregarNome()
  }, [])

  return (
    <View style={[estilosTelaPrincipal.PlanoDeFundo]}>
      <View style={[estilosTelaPrincipal.PlanoDeFundo2]} />

      <View style={[estilosTelaPrincipal.ViewPrincipal]}>
        <Text style={[estilosTelaPrincipal.TextoPrincipal]}>Seja bem-vindo, {nome}</Text>
        <TouchableOpacity onPress={() => navigate('Perfil')}>
          <Feather name="user" size={30} color="black" style={{ marginTop: -26 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMenuAberto(!menuAberto)}>
          <Feather name="menu" size={30} color="black" style={{ marginTop: -33, marginLeft: 300 }} />
        </TouchableOpacity>
      </View>

      <View style={[estilosTelaPrincipal.ViewPesquisa]}>
        <Feather name="search" size={24} color="black" style={{ marginLeft: 4 }} />
        <TextInput
          placeholder="Digite aqui o produto que deseja"
          value={pesquisa}
          onChangeText={setPesquisa}
          placeholderTextColor="black"
          style={{
            flex: 1,
            fontSize: 16,
            color: 'black',
            height: '100%',
            paddingVertical: 0,
            marginLeft: 10,
          }}
        />

        {pesquisa.length > 0 && (
          <FlatList data={resultadosFiltrados}
          keyExtractor={(item) => item.id}
          style={{maxHeight: 200, backgroundColor: 'white', borderRadius: 5, borderWidth:1, marginHorizontal: 20, position: 'absolute', top: 25, left: 0, right: 0, zIndex: 1}}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {navigate('Compras', item.tipo === 'comida' ? {comidas: item } : { bebidas: item }); setPesquisa('')}} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Text>{item.nome}</Text>
             
            </TouchableOpacity>
          )}
          />
        )}


      </View>

      <View style={[estilosTelaPrincipal.ViewBotoes]}>
        <TouchableOpacity onPress={() => navigate('telaComidas')}>
          <View style={[estilosTelaPrincipal.Botoes]}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1625/1625062.png' }} style={{ position: 'absolute', height: 70, width: 70, marginTop: 80, marginLeft: 15 }} />
            <Text style={{ position: 'absolute', marginTop: 160, marginLeft: 10, fontWeight: 'bold', fontFamily: 'Verdana', fontSize: 20 }}>Comidas</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[estilosTelaPrincipal.Botoes]}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4325/4325956.png' }} style={{ position: 'absolute', height: 70, width: 70, marginTop: 80, marginLeft: 15 }} />
            <Text style={{ position: 'absolute', marginTop: 160, marginLeft: 29, fontWeight: 'bold', fontFamily: 'Verdana', fontSize: 18 }}>Mais</Text>
            <Text style={{ position: 'absolute', marginTop: 187, marginLeft: 5, fontWeight: 'bold', fontFamily: 'Verdana', fontSize: 20 }}>Populares</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Bebidas')}>
          <View style={[estilosTelaPrincipal.Botoes]}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/390/390166.png' }} style={{ position: 'absolute', height: 70, width: 70, marginTop: 80, marginLeft: 15 }} />
            <Text style={{ position: 'absolute', marginTop: 160, marginLeft: 18, fontWeight: 'bold', fontFamily: 'Verdana', fontSize: 18 }}>Bebidas</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={[estilosTelaPrincipal.ViewInferior]} />

      <Text style={[estilosTelaPrincipal.TextoPedidoRecente]}>Pedido Recente:</Text>

      <View style={[estilosTelaPrincipal.ViewPedidos]}>
        {ultimoPedido ? (
          <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: ultimoPedido.imagem }} style={{ width: 60, height: 60,  top:20, position:'absolute' }} />
            <Text style={{ fontWeight: 'bold', fontSize: 16, position:'absolute', top:85, }}>{ultimoPedido.nome}</Text>
            <Text style={{position:'absolute', top: 115}}>{ultimoPedido.preco}</Text>
          </View>
        ) : (
          <Text style={{ textAlign: 'center' }}>Nenhum pedido recente</Text>
        )}
      </View>

      {menuAberto && (
        <View style={[estilosTelaPrincipal.ViewMenuLateral]}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Menu</Text>
          <TouchableOpacity onPress={() => navigate('telaHistóricoPedidos')}>
            <Text style={{ fontSize: 16, marginBottom: 15 }}>Histórico de pedidos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('telaHistóricoGastos')}>
            <Text style={{ fontSize: 16, marginBottom: 15 }}>Histórico de gastos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Sac')}>
            <Text style={{ fontSize: 16, marginBottom: 15 }}>SAC</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default TelaPrincipal
