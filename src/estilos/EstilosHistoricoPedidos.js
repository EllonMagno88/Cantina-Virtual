import { StyleSheet } from "react-native";

const estilosHistoricoPedidos = StyleSheet.create({
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
  data: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
})

export default estilosHistoricoPedidos;