import { View, Text, StyleSheet, Pressable} from "react-native"
import { Link } from "expo-router"

export default function mainHomePage(){
    return(
        <>
        <View style={style.container}>

            <Link href='/Encrypt/encryptA' asChild>
            <Pressable style={style.encryptBtn}>
            <Text style={style.encrypt_btn_text}>Encrypt</Text>
            </Pressable>
            </Link>

            <Link href='/Decrypt/decrypt' asChild>
            <Pressable style={style.decryptBtn}>
            <Text style={style.decrypt_btn_text}>Decrypt</Text>
            </Pressable>
            </Link>
            

        </View>
        </>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'rgba(167, 146, 119, 1)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    // Encrypt Button:
    encryptBtn:{
        backgroundColor: 'rgba(105, 80, 47, 1)',
        padding: 10,
        borderRadius:10,
        borderWidth: 2,
        borderColor: 'white',
        marginBottom:20,
        width: 250,
        height: 90

    },

    encrypt_btn_text:{
        fontSize: 35,
        color: 'rgba(255, 242, 225, 1)',
        textAlign:'center'
    },

    // Decrypt Button:
    decryptBtn:{
        backgroundColor: 'rgba(105, 80, 47, 1)',
        marginBottom: 40,
        padding: 10,
        borderRadius:10,
        borderWidth: 2,
        borderColor: 'white',
        width: 250,
        height: 90

    },
    
    decrypt_btn_text:{
        fontSize: 35,
        color: 'rgba(255, 242, 225, 1)',
        textAlign:'center'
    }
})