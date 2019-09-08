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
import useRegistrationForm from '../hooks/RegistrationHook'


const Login = (props) => { // props is needed for navigation

  const url_login = 'http://media.mw.metropolia.fi/wbma/login/';
  const url_regist = 'http://media.mw.metropolia.fi/wbma/users/';

  const signInAsync = async (inputs) => {


    const response = await fetch (url_login, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(inputs), // data can be `string` or {object}!
        headers:{'Content-Type': 'application/json'}
      });

      const json = await response.json();

      console.log(json.user.email);

    await AsyncStorage.setItem('userToken', json.token);
    await AsyncStorage.setItem('username', inputs.username);
    await AsyncStorage.setItem('password', inputs.password);
    //await AsyncStorage.setItem('full_name', json.user.full_name);
    await AsyncStorage.setItem('email', json.user.email);
    props.navigation.navigate('App');
  };

  const registrationAsync = async (inputsRegister) => {


    const response = await fetch (url_regist, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(inputsRegister), // data can be `string` or {object}!
        headers:{'Content-Type': 'application/json'}
      });

      const json = await response.json();

     console.log("json",json);

    signInAsync(inputsRegister);

  };


  const {inputs, handleUsernameChange, handlePasswordChange} = useSignUpForm();

  const {inputsRegister, handleUsernameRegister, handlePasswordRegister, handleEmailRegister, handleFullNameRegister} = useRegistrationForm();

  return (
    <View style={styles.container}>
    <Text style={styles.headText}>Login</Text>
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
      <Button title="Sign in" onPress={() => {signInAsync(inputs);} }/>
    </View>

    <Text style={styles.headText}>Registration</Text>
    <View style={styles.form}>
      <FormTextInput
        autoCapitalize='none'
        placeholder='username'
        onChangeText={handleUsernameRegister}
        value={inputsRegister.username}

      />
      <FormTextInput
        autoCapitalize='none'
        placeholder='password'
        secureTextEntry={true}
        onChangeText={handlePasswordRegister}
        value={inputsRegister.password}
      />
       <FormTextInput
        autoCapitalize='none'
        placeholder='email'
        secureTextEntry={true}
        onChangeText={handleEmailRegister}
        value={inputsRegister.email}
      />
        <FormTextInput
        autoCapitalize='none'
        placeholder='full_name'
        secureTextEntry={true}
        onChangeText={handleFullNameRegister}
        value={inputsRegister.full_name}
      />
      <Button title="Register" onPress={() => {registrationAsync(inputsRegister);} }/>
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

  form: {
    width: 200,
    alignItems: 'center',
  },

  headText: {
  fontWeight: 'bold',
  fontSize: 20,
  color:"#1589FF",
  },

});

// proptypes here

export default Login;
