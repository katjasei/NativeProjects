import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button, AsyncStorage} from 'react-native';
import useSignUpForm from '../hooks/LoginHook';

const Profile = (props) => {
  const signOutAsync = async () => {
       await AsyncStorage.clear();
       props.navigation.navigate('Auth');
     };

     const [username, setUserName] = useState('');
     const [e_mail, setEmail] = useState('');
     async function getUserInfo() {
      const userName = await AsyncStorage.getItem('username');
     // const password = await AsyncStorage.getItem('password');
      const email = await AsyncStorage.getItem('email');
      const full_name = await AsyncStorage.getItem('full_name');

      //console.log('username', userName);
      setUserName(userName);
      setEmail(email)
    }
    useEffect(() => {
      getUserInfo();
    }, []);



  return (

    <View style={styles.container}>
      <Text style={styles.headText}>Profile</Text>
      <Text>User name: {username}</Text>
      <Text>E-mail: {e_mail}</Text>
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
