import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './styles';
import Stack from './navigation.js';


export default function App() {

  return (

    <View style={styles.container}>
      <Stack/>
      <StatusBar style="auto" />
    </View>
  );
    
}
