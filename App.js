/**
 * Written by Amrik
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import Main from './src/features/Main';
import {Aprovider} from './src/context/Acontext';

function App() {
  return (
    <Aprovider>
      <SafeAreaView />
      <Main />
    </Aprovider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
