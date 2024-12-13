// Written by Amrik
import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Acontext} from '../../context/Acontext';

const UserScreen = ({route}) => {
  const {userId} = route.params;
  const {user, userLogin} = useContext(Acontext);

  useEffect(() => {}, []);

  useEffect(() => {
    userLogin(userId);
  }, [userId, userLogin]);

  console.log('Render UserScreen ...', user);
  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>Name: {user?.name}</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text>Email: {user?.email}</Text>
            <Text>Street: {user?.address?.street}</Text>
            <Text>City: {user?.address?.city}</Text>
            <Text>Phone: {user?.phone}</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>No user data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 16},
  title: {fontSize: 18, fontWeight: 'bold', marginBottom: 8},
  error: {color: 'red'},
});

export default UserScreen;
