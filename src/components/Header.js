import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import Constant from 'expo-constants';


export default function Header() {
    const navigation= useNavigation()
    const mycolor= "#212121"
  return (
    
      <View style={{
        marginTop:Constant.statusBarHeight,
          height:45,
          backgroundColor:"white",
          flexDirection:"row",
          justifyContent:"space-between",
          elevation:4,
          shadowOffset:{  width: 10,  height: 6,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
      }}>
      
      <View style={{
          flexDirection:"row",
          margin:5
      }}>
        <Entypo style={
            {marginLeft:20}}
             name="video" size={24} color="black" />
        <Text style={{
            fontSize:22,
            marginLeft:5,
            fontWeight:"bold"
        }}>MyVideos</Text>
      </View>
    <View style={{
        flexDirection:"row",
        justifyContent:"space-around",
        width:150,
        margin:5
    }}>
    
    <FontAwesome name="search" size={32} color="black" onPress={()=>navigation.navigate("search")} />
    <Text style={{
            fontSize:17,
            marginRight:10,
            fontWeight:"bold"
        }}>Buscar</Text>
    </View>
    </View>
  );
}
