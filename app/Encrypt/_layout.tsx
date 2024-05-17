import { Stack } from "expo-router";

export default function rootLayout(){
    return(
        <>
        
        <Stack screenOptions={{
            title: 'Encryption'
        }}>
            <Stack.Screen name = 'encryptA'
            options={{
                
            }}
            />
            
        </Stack>

        </>
    );
}