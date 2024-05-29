import { Stack } from "expo-router";

export default function decryptLayout(){
    return(
        <>
        
        <Stack screenOptions={{
            title: 'Decryption'
        }}>
            <Stack.Screen name = 'decrypt'
            options={{
                
            }}
            />
            
        </Stack>

        </>
    );
}