import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Bike, BIKES } from './component/types';
import Screen01 from './component/Screen1'; 
import Screen02 from './component/Screen2'; 
export default function App() {
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const defaultBike = BIKES && BIKES.length > 0 ? BIKES[0] : null;
  const [selectedBike, setSelectedBike] = useState<any>(defaultBike); 
  return (
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />

          {currentScreen === 1 && (
            <Screen01 onGetStarted={() => setCurrentScreen(2)} />
          )}
          {currentScreen === 2 && selectedBike && (
            <Screen02
              onSelectBike={(bike: Bike) => {
                setSelectedBike(bike);
                setCurrentScreen(3);
              }}
            />
          )}
        </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
