import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React from 'react';
import { Linking } from 'react-native';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import Changes from "./subscreens/Changes";


export default function App() {
  return (
    <Changes />
  );
}
