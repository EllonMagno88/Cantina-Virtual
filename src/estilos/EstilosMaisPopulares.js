import { StyleSheet } from "react-native";

const estilosMaisPopulares = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  imagem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 14,
    color: '#333',
  },
  quantidade: {
    fontSize: 12,
    color: '#888',
  },
})

export default estilosMaisPopulares;