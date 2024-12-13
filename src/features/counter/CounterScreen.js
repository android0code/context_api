// Written by Amrik
import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Acontext} from '../../context/Acontext';

export default function CounterScreen() {
  const {counter, setCounter} = useContext(Acontext);
  console.log('render counter screen...');
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Button
          onPress={() => {
            setCounter(counter + 1);
          }}
          title="Increment"
        />
      </View>

      <View style={styles.container}>
        <Button onPress={() => setCounter(counter - 1)} title="Decrement" />
      </View>

      <View style={styles.container}>
        <Button onPress={() => setCounter(counter + 5)} title="Increment 5" />
      </View>

      <View style={styles.container}>
        <Text style={{fontSize: 20}}>Result : {counter}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
  },
});
