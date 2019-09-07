import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';

import FormTextInput from '../components/FormTextInput';
import useSignUpForm from '../hooks/LoginHook'



const Login = (props) => { // props is needed for navigation

  const url_login = 'http://media.mw.metropolia.fi/wbma/login/';

  const signInAsync = async (inputs) => {


    const response = await fetch (url_login, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(inputs), // data can be `string` or {object}!
        headers:{'Content-Type': 'application/json'}
      });

      const json = await response.json();

      //console.log(json.user.full_name);

    await AsyncStorage.setItem('userToken', json.token);
    await AsyncStorage.setItem('username', inputs.username);
    await AsyncStorage.setItem('password', inputs.password);

    props.navigation.navigate('App');
  };


  const {inputs, handleUsernameChange, handlePasswordChange} = useSignUpForm();

  return (
    <View style={styles.container}>
    <Text>Login</Text>
    <View style={styles.form}>
      <FormTextInput
        autoCapitalize='none'
        placeholder='username'
        onChangeText={handleUsernameChange}
        value={inputs.username}

      />
      <FormTextInput
        autoCapitalize='none'
        placeholder='password'
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
        value={inputs.password}
      />
      <Button title="Sign in!" onPress={() => {signInAsync(inputs);} }/>
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
