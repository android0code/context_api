// Written by Amrik
import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthStackScreen from '../routes/AuthNav';
import MainStackScreen from '../routes/MainNav';
import {Acontext} from '../context/Acontext';

const Main = () => {
  // Context Variables
  const {user} = useContext(Acontext);
  console.log('mainUser=', user);

  return (
    <NavigationContainer>
      {user != null ? <MainStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default Main;
