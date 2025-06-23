import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Image, View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TextInput } from 'react-native-paper'
import estilos from './estilos/Estilos'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigation = useNavigation()

  //Cria uma função para fazer o login do usuário, requisitando as informações preenchidas no cadastro
  const Login = async () => {
    const dados = await AsyncStorage.getItem('usuario')
    const usuario = JSON.parse(dados)


  // Verifica se o usuário existe e se o email e senha estão corretos
    if (
      usuario &&
      email.trim().toLowerCase() === usuario.email.trim().toLowerCase() &&
      senha === usuario.senha
    ) {
      navigation.navigate('telaPrincipal') 
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos')
    }
  }

  return (
    
    <View style={[estilos.PlanoDeFundo]}>
      <View style={[estilos.PlanoDeFundo2]} />

      <View style={[estilos.ViewPrincipal]}>
        <Text style={[estilos.TextoCantina]}>Cantina</Text>
        <Text style={[estilos.TextoVirtual]}>Virtual</Text>

        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1720/1720486.png' }}
          style={{ width: 80, height: 80, position: 'absolute', marginTop: 263, zIndex: 10, marginLeft: 62 }}
        />
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2944/2944515.png' }}
          style={{ width: 100, height: 100, position: 'absolute', marginLeft: 210, marginTop: 260 }}
        />

        <View style={[estilos.PratoCirculoExterno]}>
          <View style={[estilos.PratoCirculoInterno]} />
        </View>
      
        <View style={[estilos.ViewInferior]}>
          <TextInput
            placeholder="Insira seu Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={{ borderRadius: 10,  }}
          />

          <TextInput
            placeholder="Insira sua Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            mode="outlined"
            style={{ borderRadius: 10,  }}
          />
    
          <TouchableOpacity
            style={{ borderWidth: 1, borderRadius: 20, paddingBottom: 15, backgroundColor: 'blue' }}
            onPress={Login}
          >
            <Text style={[estilos.TextoLogin]}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ borderWidth: 1, borderRadius: 20, paddingBottom: 15,  backgroundColor: 'blue' }}
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={[estilos.TextoCadastro]}>Sem conta? Cadastre-se aqui</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
   
  )
}

export default LoginScreen