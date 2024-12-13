// Written by Amrik

import React, {useContext, useState} from 'react';
import {
  Button,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Acontext} from '../../context/Acontext';

const LoginPage = () => {
  const {userLogin} = useContext(Acontext);
  const [loading, setLoading] = useState(false);
  const commaImageUrl = 'https://i.ibb.co/nb8Hjms/quote.png';

  const handleLogin = async () => {
    setLoading(true);
    await userLogin(1);
    setLoading(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.testimonialContainer}>
        <View style={styles.singleTestimonial}>
          <Image source={{uri: commaImageUrl}} style={styles.upperIcon} />

          <Text style={styles.testimonialText}>
            This is a simple and small app that Help to understand the concept
            of Context API.
            {'\n'} @Amrik Singh
          </Text>

          <Image source={{uri: commaImageUrl}} style={styles.bottomIcon} />
        </View>
      </View>

      <View style={styles.main}>
        <Text>Login Screen...</Text>

        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Button onPress={handleLogin} title="Login" />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  testimonialContainer: {
    marginTop: 20,
  },
  singleTestimonial: {
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  upperIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    backgroundColor: 'white',
    top: -30,
    left: 15,
  },
  bottomIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    backgroundColor: 'white',
    bottom: -20,
    right: 15,
  },
  testimonialText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 15,
  },
});

export default LoginPage;
