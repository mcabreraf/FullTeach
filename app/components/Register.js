import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  AppRegistry,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

import {
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

import { StackNavigator, SwitchNavigator } from "react-navigation"; // Version can be specified in package.json
import * as firebase from "firebase";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ID: "",
      email: "",
      password: "",
      picture: "",
      error: "",
      loading: "false",
      response: ""
    };
  }



  componentWillMount() {}

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='ios-book-outline' style={{ color: tintColor }} />
    }
  }


  render() {
    return (

      <KeyboardAvoidingView behavior= 'padding' style={styles.wrapper}>

        <View style ={styles.container}>

          <Text style ={styles.header}> SIGN UP </Text>

          <TextInput
            style = {styles.textInput}
            placeholder='Name'
            onChangeText = { (name) => this.setState({name}) }
            underlineColorAndroid='transparent'
          />

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
            onPress={this.register}>
            <Text style = {styles.white}> SIGN UP </Text>

          </TouchableOpacity>

          <TouchableOpacity
            style = {styles.registerbtn}
            onPress={() => this.props.navigation.goBack()} >
            <Text> GO BACK </Text>

          </TouchableOpacity>

          <Text>{this.state.response}</Text>

          </View>

      </KeyboardAvoidingView>

    );
  }

  register = () => {

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)

      .then(() => {
        this.writeUserData(this.state.name, this.state.email)
        alert('User Created');

        
          this.props.navigation.goBack();
        


      })
      .catch(err => {
        this.setState({
          response: err.toString()
        });
      });
  };


 writeUserData = (name,email) => {
    var user = firebase.auth().currentUser;
    firebase.database().ref('Users/'+user.uid).set({
      Name: name,
      Email: email,
      Professor: "false",
    });
  };

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
