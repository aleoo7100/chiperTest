import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsScreen from './src/posts/screens/NewsScreen';
import TopScreens from './src/posts/screens/TopScreens';
import HotScreen from './src/posts/screens/HotScreen';
import ControversialScreen from './src/posts/screens/ControversialScreen';
import WebViewScreen from './src/webView/screens/WebViewScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function RedditTabNavigator() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="New" component={NewsScreen} />
      <Tab.Screen name="Top" component={TopScreens} />
      <Tab.Screen  name="Controversial" component={ControversialScreen} />
      <Tab.Screen name="Hot" component={HotScreen} />
    </Tab.Navigator> 
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Reddit" component={RedditTabNavigator} />
        <Stack.Screen 
          name="WebView" 
          component={WebViewScreen} 
          options={{header:undefined,headerTitle:'Web'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}