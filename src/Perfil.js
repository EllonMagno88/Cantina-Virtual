import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import estilosPerfil from "./estilos/EstilosPerfil"; 
;

const Perfil = () => {

    const {goBack, navigate} = useNavigation();
    const [imagemPerfil, setImagemPerfil] = useState(null);
    const [nome, setNome] = useState('')

    const escolherImagem = async () => {

        let resultado = await ImagePicker.launchImageLibraryAsync({

            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing: true,
            aspect: [1, 1],




        });

        if (!resultado.canceled) {
            const uri = resultado.assets[0].uri;
            setImagemPerfil(uri);
            await AsyncStorage.setItem('imagemPerfil', uri); // salva a imagem no armazenamento local
          }
          


    };


    //Garante que a imagem permaneça salva mesmo após a troca de telas no app.
   useEffect(() => {
      const carregarImagem = async () => {
        const imagemSalva = await AsyncStorage.getItem('imagemPerfil');
        if (imagemSalva) {
          setImagemPerfil(imagemSalva);
        }
      };
    
      carregarImagem();
    }, []);

    const [primeiraCompra, setPrimeiraCompra,] = useState(false);

    useEffect(() => {
        const verificarPrimeiraCompra = async () => {
          const primeiraCompraSalva = await AsyncStorage.getItem('primeiraCompra');
          if (primeiraCompraSalva === 'true') {
            setPrimeiraCompra(true);
          }
        }
        verificarPrimeiraCompra();
      }, []);

      const [cinquentaCompras, setCinquentaCompras] = useState(false);
      useEffect(() => { 
          const verificarCinquentaCompras = async () => {
            const cinquentaComprasSalva = await AsyncStorage.getItem('cinquentaCompras');
            if (cinquentaComprasSalva === 'true') {
              setCinquentaCompras(true);
            }
          }

          verificarCinquentaCompras();
      }, []);
   
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

        <ScrollView style={{ flex: 1 }}>
         
          <View style={{backgroundColor: '#FF0000', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, }}/>

          <TouchableOpacity onPress={escolherImagem}
         style={{
          alignSelf: "center",
          marginTop: 80,
          borderWidth: 1,
          borderRadius: 100,
          overflow: "hidden",
          height: 150,
          width: 150,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#fff'
        }}
      >
        {imagemPerfil ? (
          <Image
            source={{ uri: imagemPerfil }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        ) : (
          <Feather name="camera" size={40} color="gray" />
        )}

        </TouchableOpacity>

{/* Conquistas */}
<View style={[estilosPerfil.ViewPrincipal]}>
        <Text style={{fontSize: 20, fontWeight: "bold", textAlign: 'center', fontFamily: 'Verdana', marginBottom: 40, marginLeft: 150,  position: 'absolute'}}>Olá, {nome}</Text>

        <Text style={{ fontSize: 22, fontWeight: "bold", marginTop:80, marginBottom: 50, textAlign: "center", fontFamily: 'Verdana' }}>
          Minhas Conquistas
        </Text>

        <View style={[estilosPerfil.ViewConquistas]}>
          <View style={[estilosPerfil.ViewIcones, {opacity: cinquentaCompras ? 1 : 0.4}]}>
           
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2583/2583346.png" }} style={{ width: 60, height: 60, }} />
            <Text style={{ textAlign: "center", marginTop: 5, fontWeight: 'bold',  }}>Cliente Fiel</Text>
            <Text style={{ textAlign: "center", fontSize: 12,  }}>50 compras!</Text>
          </View>

          <View style={[estilosPerfil.ViewIcones, {opacity: primeiraCompra ? 1 : 0.4}]}>
            
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/179/179386.png" }} style={{ width: 60, height: 60, }} />
            <Text style={{ textAlign: "center", marginTop: 5, fontWeight: 'bold',  }}>Primeira Compra</Text>
            <Text style={{ textAlign: "center", fontSize: 12,  }}>Parabéns!</Text>
          </View>

          <View style={[estilosPerfil.ViewIcones]}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3524/3524388.png" }} style={{ width: 60, height: 60,  }} />
            <Text style={{ textAlign: "center", marginTop: 5, fontWeight: 'bold',  }}>Compartilhou o app</Text>
            <Text style={{ textAlign: "center", fontSize: 12,  }}>Valeu!</Text>
          </View>
        </View>
      </View>

  <View/>
    </ScrollView>
  );
};

export default Perfil;