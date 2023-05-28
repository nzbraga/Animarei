import React,{ useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import {useNavigation } from '@react-navigation/native';

export default function Login() {
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')

    const navigation = useNavigation()

    function handleLogin(){
        navigation.navigate("Home")
    }

    return(
        <View style={style.container}>
            <Text style={style.title}>Seja bem vindo!</Text>

            <TextInput
            style={style.input}
            value={email}
            onChangeText={(text)=> setEmail(text)}
            placeholder="Digite seu email"
            />

            <TextInput
            style={style.input}
            value={password}
            onChangeText={(text)=> setPassword(text)}
            placeholder="Digite seu password"
            />

            <TouchableOpacity style={style.button} onPress={handleLogin}>
                <Text style={style.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

}


const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    marginBottom: 14,
    fontSize: 20,
  },
  input:{
    width: '90%',
    height: 45,
    backgroundColor: '#A7A7A7',
    borderRadius: 4,
    marginBottom: 14,
    padding: 8,
  },
  button:{
    width: '90%',
    height: 45,
    backgroundColor: '#B0060E',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF'
  }
})