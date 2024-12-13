// Written by Amrik
import React, {useContext} from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';
import {RouteConstants} from '../../routes/RouteConstants';
import {Acontext} from '../../context/Acontext';

export default function MainScreen({navigation}) {
  const {user, setUser, counter} = useContext(Acontext);

  const handleUserScreen = () => {
    navigation.navigate(RouteConstants.AllUserScreen, {});
  };

  const handleCounterScreen = () => {
    navigation.navigate(RouteConstants.CounterScreen, {});
  };

  const handelLogout = () => {
    setUser(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Name: {user?.name}</Text>
        <Text>email: {user?.email}</Text>
      </View>
      <Button onPress={handleUserScreen} title="User List" />

      <View style={styles.item}>
        <Text>Counter: {counter}</Text>
      </View>

      <Button onPress={handleCounterScreen} title="Counter" />

      <View style={styles.item}>
        <Button onPress={handelLogout} title="Logout" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, marginTop: 10},
  item: {marginVertical: 30, alignItems: 'center'},
});
