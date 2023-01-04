import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetRefProps } from './components/BottomSheet';

export default function App() {
  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(-682);
    } else {
      ref?.current?.scrollTo(-170);
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: '#82b74b' }}><Text style={styles.text1}> Preparing your order </Text><Text style={styles.text2}> Go to window A to pick up your order </Text></View>
        </BottomSheet>
        <TouchableOpacity style={styles.button} onPress={onPress} />
      </View>
      <View style={styles.menu}>
        <TouchableOpacity><Text style={styles.bottommenu}>Home</Text></TouchableOpacity>
        <Text style={styles.bottommenu}>Account</Text>
        <Text style={styles.bottommenu}>Delivery</Text>
        <Text style={styles.bottommenu}>Contact</Text>
      </View>
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
   
  },
  bottommenu:{
    fontSize: 18,
    color: 'blue',
    padding: 5,
    marginLeft: 22,
    fontWeight: 'bold'
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },
  text1:{
    marginLeft: 10, 
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    opacity: 0.9,
  },
  text2:{
    marginLeft: 12, 
    fontSize: 18,
    color: 'white',
    marginTop:6,
    opacity: 0.8,
  }
});