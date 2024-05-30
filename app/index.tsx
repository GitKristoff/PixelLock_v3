import { View, Text, StyleSheet, Pressable} from "react-native"
import { Link } from "expo-router"
import { Image } from "expo-image"

export default function index(){
    return(
        <>
        <View style={style.container}>
            <Image source={require('../assets/images/cipher_creator.png')} style={style.home_image}/>

            <Text style={style.intro_text}>Welcome to Encryptify, the ultimate solution for encrypting and decrypting your text using the Caesar Cipher method. </Text>
            <Link href='mainHomePage' asChild>
            <Pressable style={style.getStartedBtn}>
            <Text style={style.home_title}>Get Started</Text>
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
        justifyContent: 'flex-end'
    },

    getStartedBtn:{
        backgroundColor: 'rgba(105, 80, 47, 1)',
        marginBottom: 40,
        padding: 10,
        borderRadius:10,
        borderWidth: 2,
        borderColor: 'white',
        width: 300,
        elevation: 5
    },

    intro_text:{
        fontSize: 18,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'condensed',
        color: 'rgba(255, 242, 225, 1)',
        marginBottom: 200,
        width: 300,
        elevation: 5
    },

    home_image:{
        width: 250,
        height: 300,
        marginBottom: 50
    },

    home_title:{
        fontSize: 24,
        color: 'rgba(255, 242, 225, 1)',
        textAlign:'center',
        elevation: 5
    }
})