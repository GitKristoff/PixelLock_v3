

import { Stack } from "expo-router";

export default function setPinLayout(){
    return(
        <Stack screenOptions={{
            headerShown: false
        }}>
            
            <Stack.Screen name = 'setPin'/>
        </Stack>
    );
}