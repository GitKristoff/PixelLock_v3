import { Stack } from "expo-router";

export default function encryptLayout(){
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