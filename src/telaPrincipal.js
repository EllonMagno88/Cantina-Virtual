import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity, Text, TextInput, View, Image} from 'react-native'
import estilosTelaPrincipal from './estilos/EstilosTelaPrincipal'
import estilos from './estilos/Estilos'

const telaPrincipal = () => {
	const {goBack, navigate} = useNavigation()
	const {pesquisa, setPesquisa} = useState('')
  const [menuAberto, setMenuAberto] = useState(false)
	

	return (
		
		<View style={[estilosTelaPrincipal.PlanoDeFundo]}>
  {/* Plano de fundo */}
  <View style={[estilosTelaPrincipal.PlanoDeFundo2]}></View>
  

  {/* Conteúdo na frente */}
  <View style={[estilosTelaPrincipal.ViewPrincipal]}>
    <Text style={[estilosTelaPrincipal.TextoPrincipal]}>Seja bem-vindo, Usuário!</Text>
	<TouchableOpacity onPress={() => navigate('Perfil')}>

		<Feather name="user" size={30} color="black" style={{marginTop:-26}}/>

	</TouchableOpacity>

	<TouchableOpacity onPress={() => setMenuAberto(!menuAberto)}>

		<Feather name="menu" size={30} color="black" style={{marginTop:-33, marginLeft: 300}}/>


	</TouchableOpacity>
   </View>
  
   <View style={[estilosTelaPrincipal.ViewPesquisa]}>
       
    
      <Feather name="search" size={24} color="black" style={{ marginLeft: 4 }} />

      <TextInput placeholder="Digite aqui o produto que deseja" value={pesquisa} onChangeText={setPesquisa} placeholderTextColor="black" style={{ flex: 1, fontSize: 16, color: 'black', height: '100%', paddingVertical: 0,  marginLeft: 10}}/>
    </View>

  
    <View style={[estilosTelaPrincipal.ViewBotoes]}>

  <TouchableOpacity onPress={() => navigate('telaComidas')}>
    <View style={[estilosTelaPrincipal.Botoes]}>

      <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/1625/1625062.png"}} style={{position: 'absolute', height: 70, width: 70, marginTop: 80, marginLeft: 15,}}></Image>
      <Text style={{position: 'absolute', marginTop: 160, marginLeft:10, fontWeight:'bold', fontFamily:'Verdana', fontSize:20}}>Comidas</Text>



    </View>
  </TouchableOpacity>

  <TouchableOpacity>
    <View style={[estilosTelaPrincipal.Botoes]}>

      <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/4325/4325956.png"}} style={{position:'absolute', height: 70, width:70, marginTop: 80, marginLeft:15,}}></Image>
      <Text style={{position: 'absolute', marginTop: 160, marginLeft:29, fontWeight:'bold', fontFamily:'Verdana', fontSize:18}}>Mais</Text>
      <Text style={{position: 'absolute', marginTop: 187, marginLeft:5, fontWeight:'bold', fontFamily:'Verdana', fontSize:20}}>Populares</Text>

    </View>
  </TouchableOpacity>

  <TouchableOpacity>
    <View style={[estilosTelaPrincipal.Botoes]}>

    <Image source={{uri: "https://cdn-icons-png.flaticon.com/128/390/390166.png"}} style={{position:'absolute', height: 70, width:70, marginTop: 80, marginLeft:15,}}></Image>
    <Text style={{position: 'absolute', marginTop: 160, marginLeft:18, fontWeight:'bold', fontFamily:'Verdana', fontSize:18}}>Bebidas</Text>

    </View>
  </TouchableOpacity>


 

</View>

  <View style={[estilosTelaPrincipal.ViewInferior]}/> 

        <Text style={[estilosTelaPrincipal.TextoPedidoRecente]}>Pedido Recente:</Text>

        <View style={[estilosTelaPrincipal.ViewPedidos]}>
        
        
        </View>

        {menuAberto && (
  <View style={[estilosTelaPrincipal.ViewMenuLateral]}>
    <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Menu</Text>
    
    <TouchableOpacity onPress={() => console.log("Histórico de pedidos")}>
      <Text style={{ fontSize: 16, marginBottom: 15 }}>Histórico de pedidos</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Text style={{fontSize:16, marginBottom:15}}>Histórico de gastos</Text>

    </TouchableOpacity>

    <TouchableOpacity>
          <Text style={{fontsize:16, marginBottom:15}}>SAC</Text>

    </TouchableOpacity>
  </View>

)}




  </View>
     

         


	)
}

export default telaPrincipal
