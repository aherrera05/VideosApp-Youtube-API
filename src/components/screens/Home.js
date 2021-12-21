import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Header from '../Header';
import Card from '../Card';
import {useSelector} from 'react-redux';


export default function HomeScreen({navigation}) {
  const cardData = useSelector(state=>{
    return state
  })
  return (
    <View style={{flex:1}}>
      <Header/>
      
      <FlatList
      data= {cardData}
      renderItem={({item})=>{
        return <Card 
        videoId={item.id.videoId}
        title={item.snippet.title}
        channel={item.snippet.channelTitle}
        />
      }}
      keyExtractor={item=>item.id.videoId}/>

      
    </View>
  );
}


