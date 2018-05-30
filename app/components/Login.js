import React from 'react';
import { AppRegistry, StyleSheet, Image, ImageBackground, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';
import {
  Text,
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  ListItem,
  Icon,
  InputGroup,
  List
} from "native-base";

import * as firebase from 'firebase';



export default class Login extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      response: '',
    }
    this.login = this.login.bind(this)
  }

  componentDidMount(){
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {

    var value = await AsyncStorage.getItem('user');
    if (value !== null){
      this.props.navigation.navigate('Profile');
    }

  }

  render() {
    return (


      <KeyboardAvoidingView behavior= 'padding' style={styles.wrapper}>

        <View style ={styles.container}>

        <View style = {styles.logoContainer}>
          <Image style = {styles.logo}
            source={require('../img/FULLTEACH.jpg')}
            />
        </View>

          <Text style ={styles.header}> FULLTEACH </Text>
          <TextInput
            
            style = {styles.textInput}
            placeholder='Email'
            onChangeText = { (email) => this.setState({email}) }
            underlineColorAndroid='transparent'
          />

          <TextInput 
          
            style = {styles.textInput}
            secureTextEntry={true}
            placeholder='Password'
            onChangeText = { (password) => this.setState({password}) }
            underlineColorAndroid='transparent'
          />


          <TouchableOpacity
            style = {styles.btn}
            onPress={this.login}>
            <Text style = {styles.white}> LOG IN </Text>

          </TouchableOpacity>

          <View>

          <TouchableOpacity
            style = {styles.registerbtn}
            onPress={() => this.props.navigation.navigate('Registro')} >
            <Text> SIGN UP </Text>

          </TouchableOpacity>


          </View>
        </View>

      </KeyboardAvoidingView>
    );
  }

  login = async () => {
      try {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        this.setState({
          response:'user log in'
        })
       
          this.props.navigation.navigate('Profile');
       
         

      }catch(error){
        alert(error.toString());
        this.setState({
          response: error.toString()

        })
      }
  }
}




const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft: 40,
    paddingRight: 40,
  },
  logoContainer:{
    alignItems: 'center',
    justifyContent:'center',
    flexGrow: 0.4,
  },
  logo: {
    width:150,
    height: 150,

  },
  header: {
    fontSize: 24,
    marginBottom: 5,
    color: '#0a4e87',
    fontWeight: 'bold',

  },
  textInput: {
    alignSelf: 'stretch',
    padding: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#0a4e87',

  },
  white: {
    color: 'white',
    fontWeight: 'bold'

  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor:'#0a4e87',
    padding:10,
    alignItems: 'center',
  },
  registerbtn: {
    alignSelf: 'stretch',
    backgroundColor:'transparent',
    padding:10,
    alignItems: 'center',

  },
});
