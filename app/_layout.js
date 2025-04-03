import { Stack } from "expo-router";
import React from "react";

export default function RootLayout(){
    return(
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index"></Stack.Screen>
            <Stack.Screen name="pix"></Stack.Screen>
            <Stack.Screen name="pagar"></Stack.Screen>
            <Stack.Screen name="meus-cartoes"></Stack.Screen>
        </Stack>
    );
}