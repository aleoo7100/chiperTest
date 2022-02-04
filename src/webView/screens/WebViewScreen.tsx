import { RouteProp } from '@react-navigation/core';
import React from 'react';
import { WebView } from 'react-native-webview';

interface PROPS{
  route: RouteProp<{params:{url:string}}>
}

export default function WebViewScreen({route}:PROPS){
  const { url } = route.params;
  
  return (
    <WebView source={{ uri: url }}/>
  )
}