import React from 'react';
import {StyleSheet,
        View,
        StatusBar,
        Text,
        Image,
        ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import List from './components/List';
import {MediaProvider} from './contexts/MediaContext';


const App = () => {

 return (

   <MediaProvider>

      <StatusBar barStyle = "light-content"/>
      <View style={styles.statusBar}></View>


      <View style={styles.toolbar}>

      <Image style={styles.logoImage}
          source={require('./pictures/bird.jpg')} />
      <Text style ={styles.nameText}> Downloads </Text>
      </View>

      <View>

      <ImageBackground

          source={require('./pictures/gallery.jpg')}
          style={styles.mainImage}>

        <Text style={styles.textPicture}>Pictures</Text>
      </ImageBackground>

        <List />
      </View>
   </MediaProvider>
 );

};

const styles = StyleSheet.create({

  container: {
  backgroundColor: '#fff',
 },

 statusBar: {
  backgroundColor: "#1589FF",
  height: Constants.statusBarHeight,

},

toolbar: {
  flexDirection:"row",
  backgroundColor: '#1589FF',
  height: 56,
  alignSelf: 'stretch',
  textAlign: 'center',
  paddingLeft:15,
  paddingTop:3,
},

 nameText: {
  color:"white",
  fontSize: 25,
  paddingBottom: 10,
  paddingTop:10,
  paddingLeft:20,
},


logoImage: {
  width:50,
  height:50,
  paddingRight:10,
  paddingLeft:10,
},

mainImage: {
height:200,
marginBottom:5,
},

textPicture: {
  fontWeight: 'bold',
  fontSize: 20,
  padding:10,
  color:"#1589FF",
  backgroundColor:"#ADDFFF",
  },

});

export default App;

