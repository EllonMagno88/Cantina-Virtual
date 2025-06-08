import React from "react";
import { View,Text,Image,FlatList,StyleSheet,TouchableOpacity,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import estilosTelaPrincipal from "./estilos/EstilosTelaPrincipal";

const TelaBebidas = () => {
  const navigation = useNavigation();

  const bebidas = [
    {
      id: '1',
      nome: 'Refrigerante em Latinha',
      preco: 'R$ 5,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/735/735842.png',
      
    },
    {
      id: '2',
      nome: 'Agua Mineral sem gás',
      preco: 'R$ 2,50',
      imagem: 'https://cdn-icons-png.flaticon.com/128/824/824239.png',
    },
    {
      id: '3',
      nome: 'Agua mineral com gás',
      preco: 'R$ 3,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/824/824239.png',
    },
    {
      id: '4',
      nome: 'Milkshake de Chocolate',
      preco: 'R$ 9,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/659/659368.png',
    },
    {
      id: '5',
      nome: 'Refrigerante 600ml',
      preco: 'R$ 7,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/3076/3076028.png',
    },
    {
      id: '6',
      nome: 'Suco Natural de Laranja',
      preco: 'R$ 6,50',
      imagem: 'https://cdn-icons-png.flaticon.com/128/1687/1687077.png',
    },
   
  ];

  return (
    <View style={[estilosTelaPrincipal.PlanoDeFundo]}>
      <View style={[estilosTelaPrincipal.PlanoDeFundo2]} />

      <FlatList
        data={bebidas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
       <TouchableOpacity onPress={() => navigation.navigate('Compras', { bebidas: item })}>
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text>{item.preco}</Text>
            </View>
          </View>
        </TouchableOpacity>
        )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    
  },
  imagem: {
    width: 50,
    height: 50,
    marginRight: 10,
    
    position: "relative"
    
  },

  imagem2: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 25,
    left: 25,
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TelaBebidas;

