/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';
import firebase from 'react-native-firebase';
import button from 'react-native-button'


export default class App extends Component{
  constructor(props){
    super(props);
this.state={
  typedEmail:'',
  typedPassword:'',
  user:null,
 };
}




  render() {
    return (
      <View 
          style={{
            flex:1,
            alignItems:'center',
            backgroundColor:'white',
            borderRadius:Platform.OS=='android'? 30:0 ,

          }}
      >
      <TextInput style={{
              height:40,
              width :200,
              margin:10,
              padding:10,
              borderColor:'gray',
              borderWidth:1,
              color:'black'
      }}

      keyboardType='email-address'
      placeholder='Enter Your Email'
      autoCapitalize='none'
      onChangeText={
          (text)=>{
            this.setState({typedEmail:text});
          }
      }
      />


        
      </View>
    );
  }
}


