import React from "react";
import { StyleSheet, View } from "react-native";

const estilosTelaPrincipal = StyleSheet.create({
  
    PlanoDeFundo: {

        flex: 1, 
       

    },

    PlanoDeFundo2:{

        backgroundColor: '#FF0000', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 0,

    },

    ViewPrincipal: {

        marginTop: 2, 
        padding: 20, 
        backgroundColor: '#FF0000', 
        zIndex: 10, 
        position: 'relative', 
        borderWidth:2,

    },

        TextoPrincipal:{

            fontFamily: 'Verdana', 
            fontSize: 20, 
            fontWeight: 'bold', 
            marginLeft: 50


        },

    ViewPesquisa:{
            
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 10,
		marginLeft: 20,
        width: '90%',         
        marginTop: 20,
      },

    ViewBotoes:{

        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center',   
        marginTop: 40,  
        paddingTop: -100


    },

        Botoes:{

            paddingLeft: 100, 
            paddingBottom: 250,  
            backgroundColor: '#FFFFFF', 
            zIndex: 20, 
            borderWidth: 1, 
            borderRadius: 20, 
            marginLeft: 15, 
            marginRight: 15, 
            marginBottom: 200,


        },

    ViewInferior:{

        marginBottom:25,  
        zIndex: 30, 
        gap: 10,

    },

         TextoPedidoRecente:{

        fontFamily: 'Verdana', 
        fontSize: 20, 
        textAlign:'center', 
        marginTop: 460, 
        marginLeft: 118, 
        fontWeight: 'bold', 
        position: 'absolute',


         },

    ViewPedidos:{

        backgroundColor: '#FFFFFF', 
        marginTop: 500,  
        zIndex: 20, 
        borderWidth:1, 
        borderRadius:20, 
        width: '80%', 
        maxHeight: '70%', 
        paddingBottom: 170, 
        marginLeft: 36, 
        flexGrow: 0, 
        position: 'absolute',


    },

    ViewMenuLateral:{

        position: 'absolute',
        top: 2,
        bottom: 0,
        left: 0,
        width: '60%',
        backgroundColor: '#FF0000',
        borderRightWidth: 1,
        borderColor: 'black',
        padding: 20,
        zIndex: 999,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3.84,

    },

    

});

export default estilosTelaPrincipal;