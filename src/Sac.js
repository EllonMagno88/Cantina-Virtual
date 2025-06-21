import { Link, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Feather } from '@expo/vector-icons'
import { TextInput } from 'react-native-paper'
import estilos from './estilos/Estilos'

const SAC = () => {
    const {goBack, navigate} = useNavigation()
    const enviarFeedback = () => {

        const email = 'suportecantinavirtual@gmail.com'
        const assunto = 'Feedback - Cantina Virtual'
        const corpo = 'Escreva aqui seu feedback ou dúvida sobre a Cantina Virtual.'
        const url = `mailto:${email}?subject=${assunto}&body=${corpo}` 
        Linking.openURL(url)

    }
        

    

return (
    <View style={[estilos.PlanoDeFundo]}>
      <View style={[estilos.PlanoDeFundo2]} />
      <View style={[estilos.ViewPrincipal]}>
        <Feather name='headphones' size={130} color='black' style={{ marginTop: 150, marginLeft: 125, position: 'absolute' }} />
        <Text style={{fontFamily: 'Verdana', fontSize: 30, fontWeight: 'bold', position:'absolute', marginTop:300, textAlign: 'center'}}>Gostou do App ou encontrou algum problema? Envie-nos seu Feedback clicando no botão abaixo!</Text>
        <TouchableOpacity onPress={enviarFeedback} style={{ backgroundColor: 'green', padding:30, marginTop: 500, marginLeft:10, marginRight:10, borderRadius:10, }}> 
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, marginTop: 15, marginLeft:103, fontFamily: 'Verdana', position:'absolute' }}>Enviar Feedback</Text>
        </TouchableOpacity>
      </View>
    </View>
  )



}

export default SAC