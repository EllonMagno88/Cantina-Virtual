import React from "react";
import { StyleSheet, View } from "react-native";

const estilos = StyleSheet.create({

    PlanoDeFundo: {

        flex: 1, 
        borderWidth: 5,  
        position: 'static', 

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

        flex: 1 , 
        gap: 8, 
        zIndex: 20, 
        backgroundColor: '#FF0000', 
        position: 'relative',

    },

         TextoCantina: {

        textAlign: 'center', 
        marginTop: 50, 
        fontSize: 50, 
        fontFamily: 'Tahoma', 
        textShadowColor: '#FFFF00', 
        textShadowOffset: { width: -1, height: 2 }, 
        textShadowRadius: 4

         },

         TextoVirtual: {

        textAlign: 'center', 
        fontSize: 40, 
        fontFamily: 'Tahoma', 
        textShadowColor: "#FFFF00", 
        textShadowOffset: { width: -1, height: 2 }, 
        textShadowRadius: 3,

         },

    ImagemSanduiche: {

        width: 80, 
        height: 80, 
        position: 'absolute', 
        marginTop: 263, 
        zIndex: 10, 
        marginLeft: 62,

    },

    PratoCirculoExterno:{

        backgroundColor: '#FFFFFF', 
        borderWidth: 2, 
        borderRadius: 180, 
        width: 150, 
        height: 160, 
        justifyContent: 'center', 
        marginLeft: 25, 
        marginTop: 42, 
        paddingRight: 60,
    },

    PratoCirculoInterno:{

        backgroundColor: '#FFFFFF', 
        borderWidth: 2, 
        borderRadius: 180, 
        width: 115, 
        height: 120, 
        marginLeft: 15, 
        padding: 20,

    },

    ViewInferior:{

         marginTop: 30, 
         paddingHorizontal: 42, 
         gap: 20, 
    },

    ViewInferiorCadastro:{

        marginTop: 25, 
        paddingHorizontal: 42, 
        gap: 20, 
   },

    TextoLogin:{

        textAlign: 'center', 
        marginTop: 12, 
        fontFamily: 'Verdana', 
        color: 'white', 
        fontWeight: 'bold', 

    },

    TextoCadastro:{

        textAlign: 'center', 
        marginTop: 12, 
        fontFamily: 'Verdana', 
        color: 'white', 
        fontWeight: 'bold', 

    },

})

export default estilos