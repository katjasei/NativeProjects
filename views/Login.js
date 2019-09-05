import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';

import FormTextInput from '../components/FormTextInput'


const Login = (props) => { // props is needed for navigation
  const signInAsync = async (props) => {
      const response = await fetch (url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{'Content-Type': 'application/json'}
      });
      const json = await response.json();
      console.log(json);

    await AsyncStorage.setItem('userToken', tokenFromApi);
    props.navigation.navigate('App');
  };
  return (
    <View style={styles.container}>
    <Text>Login</Text>
    <View style={styles.form}>
      <FormTextInput
        autoCapitalize='none'
        placeholder='username'
      />
      <FormTextInput
        autoCapitalize='none'
        placeholder='password'
        secureTextEntry={true}
      />
      <Button title="Sign in!" onPress={signInAsync} />
    </View>
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
});

// proptypes here

export default Login;
