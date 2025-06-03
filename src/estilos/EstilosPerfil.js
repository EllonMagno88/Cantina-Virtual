import { StyleSheet } from "react-native";

const estilosPerfil = StyleSheet.create({


    ViewPrincipal:{

        marginTop: 50, 
        paddingHorizontal: 20, 
        marginBottom: 400,
    },

    ViewConquistas:{

        flexDirection: "row", 
        justifyContent: "space-around", 
        flexWrap: "wrap", 
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        padding: 20,
        gap: 20,


    },

        ViewIcones:{

            alignItems: "center", 
            width: 100,

        },




})

export default estilosPerfil