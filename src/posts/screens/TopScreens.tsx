import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import useData from '../hooks/useData';

export default function TopScreens(){
  const { news, loading, getNews } = useData({url:'https://api.reddit.com/r/pics/top.json'});  
  
  return (
    <View style={styles.cont}>
      <FlatList
        keyExtractor={(item)=>item.id}
        data={news}
        refreshing={loading}
        onRefresh={getNews}
        ItemSeparatorComponent={()=><View style={styles.separator}/>}
        renderItem={({ item }) => <Card item={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cont:{
    flex:1,
    backgroundColor: '#FFF'
  },
  separator:{
    width:'100%',
    height:2,
    backgroundColor:'#f5f5f5',
    marginVertical:4
  }
});