// Written by Amrik
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Acontext} from '../../context/Acontext';

const UserPostsScreen = ({route}) => {
  const {allPosts, posts} = useContext(Acontext);
  const {userId} = route.params;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    apiCall();
  }, [userId]);

  const apiCall = async () => {
    setLoading(true);
    await allPosts(userId);
    setLoading(false);
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  item: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  title: {fontSize: 16, fontWeight: 'bold'},
});

export default UserPostsScreen;
