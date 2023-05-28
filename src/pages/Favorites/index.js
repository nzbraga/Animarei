import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AuthContext } from '../../context/auth';

export default function Favorites() {

  const {name} = useContext(AuthContext)

 return (
   <View style={styles.container}>
     <Text> Favoritos de {name} </Text>
     
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})