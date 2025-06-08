import React from "react";
import { View,Text,Image,FlatList,StyleSheet,TouchableOpacity,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import estilosTelaPrincipal from "./estilos/EstilosTelaPrincipal";

const TelaComidas = () => {
  const navigation = useNavigation();

  const comidas = [
    {
      id: '1',
      nome: 'Hambúrguer com Batata Frita',
      preco: 'R$ 18,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/3075/3075977.png',
      imagem2: 'https://cdn-icons-png.flaticon.com/128/1046/1046786.png',
    },
    {
      id: '2',
      nome: 'X-Salada',
      preco: 'R$ 15,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/1720/1720486.png',
    },
    {
      id: '3',
      nome: 'X-Bacon com Cheddar',
      preco: 'R$ 20,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/12809/12809396.png',
    },
    {
      id: '4',
      nome: 'Hot Dog com Batata Palha',
      preco: 'R$ 12,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/2102/2102354.png',
    },
    {
      id: '5',
      nome: 'Misto Quente',
      preco: 'R$ 8,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/2821/2821805.png',
    },
    {
      id: '6',
      nome: 'Sanduíche Natural de Frango',
      preco: 'R$ 10,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/9442/9442913.png',
    },
    {
      id: '7',
      nome: 'Coxinha de Frango com Catupiry',
      preco: 'R$ 7,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/6882/6882214.png',
    },
    {
      id: '8',
      nome: 'Pastel de Carne com Ovo',
      preco: 'R$ 9,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/12694/12694455.png',
    },
    {
      id: '9',
      nome: 'Esfiha de Carne',
      preco: 'R$ 6,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/9633/9633365.png',
    },
    {
      id: '10',
      nome: 'Pizza Mussarela (fatia)',
      preco: 'R$ 10,00',
      imagem: 'https://cdn-icons-png.flaticon.com/128/1404/1404945.png',
    },
  ];

  return (
    <View style={[estilosTelaPrincipal.PlanoDeFundo]}>
      <View style={[estilosTelaPrincipal.PlanoDeFundo2]} />

      <FlatList
        data={comidas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Compras', { comidas: item })}>
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <Image source={{ uri: item.imagem2 }} style={styles.imagem2} />
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

export default TelaComidas;
