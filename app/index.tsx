import { View, Text, StyleSheet, Pressable} from "react-native"
import { Link } from "expo-router"

export default function index(){
    return(
        <>
        <View style={style.container}>

            <Link href='/Set Pin/setPin' asChild>
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

    },

    home_title:{
        fontSize: 24,
        color: 'rgba(255, 242, 225, 1)',
        textAlign:'center'
    }
})