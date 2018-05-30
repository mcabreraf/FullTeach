import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
import Register from './app/components/Register';
import Subjects from './app/components/Subjects';
import Inbox from './app/components/Inbox';
import ProfByMat from './app/components/ProfByMat';
import Infoprof from './app/components/Infoprof';
import Bprof from './app/components/Bprof';

const Other = createBottomTabNavigator({

  Inbox: { screen: Inbox},
  Profile: { screen: Profile},
  Subjects: { screen: Subjects},
  
},{
  initialRouteName: 'Profile',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#fff',
    activeBackgroundColor: '#0a4e87',

  }
}
);

const Home = createStackNavigator ({
  Entrada: { screen: Login },
  Registro: { screen: Register },
  Profile: { screen: Other },
  Profesores: { screen: ProfByMat},
  InfoProfesores: { screen: Infoprof },
  SerProfesor: { screen: Bprof }
},
{
  navigationOptions: {
    header: null,
  }
},
);


export default class App extends React.Component {

    
    componentWillMount(){
      firebase.initializeApp({
      apiKey: 'AIzaSyAM3ZIHIiRKtwY0qOh0MCtSEWjD1Rg3ZEc',
      authDomain: 'fullteach-82c40.firebaseapp.com',
      databaseURL: 'https://fullteach-82c40.firebaseio.com',
      projectId: 'fullteach-82c40',
      storageBucket: 'fullteach-82c40.appspot.com',
      messagingSenderId: '76856350242'
    });
    }

  render() {
    console.ignoredYellowBox = ['Setting a timer'];
    return (
      <Home/>

    );
  }
}
