import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Ionicons} from '@expo/vector-icons'
import * as Font from 'expo-font'
import {Asset} from 'expo-asset'
import { StyleSheet, Text, View } from 'react-native';
import LoggedOutNav from './navigators/LoggedOutNav';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import client, { isLogginedVar} from './apollo'
import LoggedInNav from './navigators/LoggedInNav';
export default function App() {
  const [loading, setLoading] = useState(true); // 초기 로딩상태 True
  const onFinish = () => setLoading(false);     // Loading이 끝나면, 로딩상태를 False로 바꾼다.
  const isLoggined = useReactiveVar(isLogginedVar);
  const preload = () => {

    // Font, Icon 로딩
    const fontsToLoad = [Ionicons.font];
    const fontsPromises = fontsToLoad.map((font) => Font.loadAsync(font));

    // Images 로딩
    const imagesToLoad = [
      require("./assets/icon.png"),
      "https://pics.freeicons.io/uploads/icons/png/13533707011536298178-512.png",
    ];
    const imagesPromises = imagesToLoad.map((image) => {
      Asset.loadAsync(image)
    });

    // Loading 데이터 반환
    return Promise.all(fontsPromises, imagesPromises);
  };
  if (loading) {
    return (
      <AppLoading
        startAsync={preload}
        onFinish={onFinish}
        onError={console.warn}
      />
    );
  }
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggined ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </ApolloProvider>
  );
}