import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Image, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import estilos from './estilos/Estilos'

export default function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const navigation = useNavigation()

  //Cria uma função para cadastrar o usuário
  // A função é assíncrona porque ela vai fazer uma requisição para o AsyncStorage
  const cadastrar = async () => {
    if (!email || !senha || !nome) {
      return Alert.alert('Erro', 'Preencha todos os campos')
    }
    if (senha !== confirmarSenha) {
      return Alert.alert('Erro', 'As senhas não coincidem')
    }

    //Cria uma constante para o usuario e salva no AsyncStorage
    // O AsyncStorage é uma forma de armazenar dados localmente no dispositivo do usuário
    const novoUsuario = { nome, email, senha }
    await AsyncStorage.setItem('usuario', JSON.stringify(novoUsuario))
    await AsyncStorage.setItem('nome', nome)
    Alert.alert('Sucesso', 'Cadastro realizado!')
    navigation.navigate('LoginScreen') 
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

        <View style={[estilos.ViewInferiorCadastro]}>
          <TextInput
            placeholder="Nome de usuário"
            value={nome}
            onChangeText={setNome}
            style={{ borderWidth: 1, padding: 8, borderRadius: 10, backgroundColor: 'white' }}
        
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{ borderWidth: 1, padding: 8, borderRadius: 10, backgroundColor: 'white' }}
          />
          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={{ borderWidth: 1, padding: 8, borderRadius: 10, backgroundColor: 'white' }}
          />
          <TextInput
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
            style={{ borderWidth: 1, padding: 8, borderRadius: 10, backgroundColor: 'white' }}
          />

          <TouchableOpacity
            onPress={cadastrar}
            style={{ backgroundColor: 'blue', padding: 15, borderRadius: 10 }}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
