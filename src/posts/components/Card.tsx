import moment from 'moment';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NEW } from '../hooks/useData';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface PROPS{
  item:NEW,
}

export default function Card({item}:PROPS){
  const [imageError, setImageError] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<{WebView:any}>>();

  function onPress(url?:string) {
    if(url){
      navigation.navigate('WebView', {url:`https://www.reddit.com${url}`} );
    }
  }

  return (
    <TouchableOpacity
      onPress={()=>onPress(item.permalink)} 
      style={styles.container}
    >
      <Image 
        source={imageError?require('../../assets/image.png'):{uri:item.thumbnail}} 
        style={styles.image} 
        resizeMode="contain"
        onError={()=>setImageError(true)}
      />
      <View style={{flex:1,paddingHorizontal:8}}>
        <Text style={styles.timeText}>
          {moment((item.created*1000)).fromNow()}
        </Text>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <View style={styles.dataCont}>
          <Text numberOfLines={1}  style={styles.authorText}>
            {item.author}
          </Text>
          <Text numberOfLines={1}  style={styles.dataText}>
            {`Score: ${item.score}`}
          </Text>
          <Text numberOfLines={1}  style={styles.dataText}>
            {`${item.num_comments} comments`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    padding: 4,
  },
  title:{
    fontWeight:'bold',
    fontSize:16,color:'#333'
  },
  dataCont:{
    flexDirection:'row',
    flex:1,
    alignItems:'flex-end',
    paddingBottom:8,
  },
  authorText:{
    alignSelf:'flex-end',
    color:'#444',
    flex:1,
    fontSize:11
  },
  dataText:{
    alignSelf:'flex-end',
    color:'#444',
    minWidth:70,
    marginLeft:6,
    textAlign:'right',
    fontSize:11
  },
  timeText:{
    alignSelf:'flex-end',
    color:'#444',
  },
  image:{
    width:100,
    height:100
  }
});