import { View, Text, StyleSheet, Pressable, TextInput} from "react-native"
import { Link } from "expo-router"

export default function setPin(){
    return(
        <>
        <View style={style.container}>

            {/* Text Instruction: */}

            <Text style={style.instructions}>
                Please provide a 4-number pin to add more
                privacy.
            </Text>


            {/* Pin Input: */}
            <View style={style.pinInput}>
            <TextInput style={style.pinOne}/>
            <TextInput style={style.pinTwo}/>
            <TextInput style={style.pinThree}/>
            <TextInput style={style.pinFour}/>
            </View>


            {/* Skip Button: */}
            <Link href='/mainHomePage' asChild>
            <Pressable style={style.skipBtn}>
            <Text style={style.skip_btn_text}>Skip</Text>
            </Pressable>
            </Link>

            {/* Set Pin Button: */}
            <Link href='/Set Pin/verification' asChild>
            <Pressable style={style.setPinBtn}>
            <Text style={style.pin_btn_text}>Set Pin</Text>
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

    // Text Instructions:
    instructions:{
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 18,
        textAlign:'center',
        fontStyle:'italic',
        marginBottom: 30
    },

    // Pin Input:

    pinInput:{
        display:'flex',
        flexDirection:'row',
        marginBottom:280,
        textAlign: 'center',
        justifyContent:'center',
        alignItems:'center'
    },

    // 01:
    pinOne:{
        borderRadius:10,
        borderWidth: 2,
        borderColor: 'white',
        height: 70,
        width: 60,
        padding:10,
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 28,
        marginRight: 20
    },
    // 02:
    pinTwo:{
        borderRadius:10,
        borderWidth: 2,
        borderColor: 'white',
        height: 70,
        width: 60,
        padding:10,
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 28,
        marginRight: 20
    },
    // 03:
    pinThree:{
        borderRadius:10,
        borderWidth: 2,
        borderColor: 'white',
        height: 70,
        width: 60,
        padding:10,
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 28,
        marginRight: 20
    },
    // 04:
    pinFour:{
        borderRadius:10,
        borderWidth: 2,
        borderColor: 'white',
        height: 70,
        width: 60,
        padding:10,
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 28,
        
    },

    // Skip Button:
    skipBtn:{
        backgroundColor: 'rgba(212, 180, 139, 1)',
        padding: 10,
        borderRadius:10,
        borderWidth: 2,
        borderColor: 'white',
        width: 300,
        marginBottom:20

    },

    skip_btn_text:{
        fontSize: 24,
        color: 'rgba(255, 255, 255, 1)',
        textAlign:'center'
    },

    // Set Pin Button:
    setPinBtn:{
        backgroundColor: 'rgba(105, 80, 47, 1)',
        marginBottom: 40,
        padding: 10,
        borderRadius:10,
        borderWidth: 2,
        borderColor: 'white',
        width: 300,

    },
    
    pin_btn_text:{
        fontSize: 24,
        color: 'rgba(255, 242, 225, 1)',
        textAlign:'center'
    }
})