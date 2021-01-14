import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function App(){
  return (
    <>
      <View style={style.container}>
        <Text style={style.sectionTitle}>Engine: Hermes</Text>
      </View>

    </>
  );
};
const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"#F5F5F5"
  },
  sectionTitle:{
    fontSize: 24,
    textAlign:"center",
    color: Colors.balck
  }
})