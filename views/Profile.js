import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button, AsyncStorage} from 'react-native';
import useSignUpForm from '../hooks/LoginHook';

const Profile = (props) => {

  const signOutAsync = async () => {
       await AsyncStorage.clear();
       props.navigation.navigate('Auth');
     };

     const [user, setUserName] = useState({});
     async function getUserInfo() {

      const user = await AsyncStorage.getItem('user');

      console.log('user', user);

      setUserName(JSON.parse(user));
    }
    useEffect(() => {
      getUserInfo();
    }, []);



  return (

    <View style={styles.container}>
      <Text style={styles.headText}>Profile</Text>

        <Text>User name:{user.username}</Text>
        <Text>E-mail:{user.email}</Text>
        <Text>Full name:{user.full_name}</Text>
      <Button title="Logout!" onPress={signOutAsync} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 20,
    color:"#1589FF",
    },
});

export default Profile;
