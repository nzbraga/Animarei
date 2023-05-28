import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";

import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation()

    return(
        <View style={style.container}>
            <Text> Home </Text>

            <Button 
            title="Favoritos"
            onPress={()=> navigation.navigate("Favoritos")}
            />
            
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})