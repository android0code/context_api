// Written by Amrik
import React, {useState, useReducer} from 'react';

// Config Reducers
import {initialAuthState, authReducer} from './reducers/authReducer';
import api from '../services/ApiService';

export const Acontext = React.createContext();

export const Aprovider = props => {
  // Reducer Variables
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  // State Vaiables
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(0);

  const userLogin = async userId => {
    try {
      const res = await api.get(`/users/${userId}`);
      console.log('login res', res);
      setUser(res);
    } catch (err) {
      console.log('error', err);
      setUser(null);
    }
  };

  const allUsers = async () => {
    try {
      const res = await api.get('/users');
      console.log('allUsers', res);
      setUsers(res);
    } catch (err) {
      console.log(err);
      setUsers([]);
    }
  };

  const allPosts = async userId => {
    try {
      const res = await api.get(`/posts/?userId=${userId}`);
      console.log('allPosts', res);
      setPosts(res);
    } catch (err) {
      console.log(err);
      setPosts([]);
    }
  };

  return (
    <Acontext.Provider
      value={{
        // Reducers
        authState,
        authDispatch,
        //states
        user,
        setUser,
        users,
        posts,
        counter,
        setCounter,

        //api
        userLogin,
        allUsers,
        allPosts,
      }}>
      {props.children}
    </Acontext.Provider>
  );
};
