// Written by Amrik
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {RouteConstants} from '../../routes/RouteConstants';
import {Acontext} from '../../context/Acontext';

const AllUsersScreen = ({navigation}) => {
  const {users, allUsers} = useContext(Acontext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    setLoading(true);
    await allUsers();
    setLoading(false);
  };

  const nextScreenPosts = item => {
    return () => {
      //let item = mItem.item;
      navigation.navigate(RouteConstants.UserPostsScreen, {
        userId: item.id,
      });
    };
  };

  const nextScreenUser = item => {
    return () => {
      navigation.navigate(RouteConstants.UserScreen, {
        userId: item?.id,
      });
    };
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <>
            <View style={{marginTop: 10}}>
              <Text>name: {item?.name}</Text>
              <Text>email: {item?.email}</Text>
            </View>
            <View style={styles.rowView}>
              <TouchableOpacity
                style={styles.item}
                onPress={nextScreenUser(item)}>
                <Text>{'Details'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.item}
                onPress={nextScreenPosts(item)}>
                <Text>{'Post'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomView} />
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  item: {padding: 16},
  error: {color: 'red'},
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  bottomView: {
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
});

export default AllUsersScreen;
