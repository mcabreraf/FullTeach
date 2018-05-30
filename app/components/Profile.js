var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var f = new Date();
import React from 'react';
import { AppRegistry, StyleSheet, Image, ImageBackground, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Form,
  Item,
  Input,
  Label,
  Button,
  ListItem,
  Icon,
  InputGroup,
  List,
  Title
} from "native-base";
import { createDrawerNavigator } from 'react-navigation';
import Login from './Login';
import Firebase from './firebase';
import Helpers from './Helpers';

export default class Profile extends React.Component {
  static navigationOptions = {
    
    title: 'Profile',
    
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='ios-person' style={{ color: tintColor }} />
    }
  }

  constructor(props){
    super(props)
    this.state = {
      userName: '',
      Professor: '',
      emailprof: '',
      hor1prof: '',
      hor2prof: '',
      desprof: '',
      precioprof: '',
      mat1prof:'',
      mat2prof:''
    }
  }

  async componentWillMount() {
    try {
      Helpers.getName(Firebase.getUid(),(name)=>{
        this.setState({
            userName: name
        })
      }),
      Helpers.getProfessor(Firebase.getUid(),(namep)=>{ 
        this.setState({ 
          Professor: namep  
        })
      })
      Helpers.getEmailProf(Firebase.getUid(),(item2)=>{
        this.setState({
            emailprof: item2
        })
      })
      Helpers.getHor1Prof(Firebase.getUid(),(item3)=>{
        this.setState({
            hor1prof: item3
        })
      })
      Helpers.getHor2Prof(Firebase.getUid(),(item4)=>{
        this.setState({
            hor2prof: item4
        })
      })
      Helpers.getDesProf(Firebase.getUid(),(item5)=>{
        this.setState({
            desprof: item5
        })
      })
      Helpers.getPrecioProf(Firebase.getUid(),(item6)=>{
        this.setState({
            precioprof: item6
        })
      })
      Helpers.getMat1Prof(Firebase.getUid(),(item7)=>{
        this.setState({
            mat1prof: item7
        })
      })
      Helpers.getMat2Prof(Firebase.getUid(),(item8)=>{
        this.setState({
            mat2prof: item8
        })
      })
    }catch(error){
      console.log(error)
    }


    }

   

  render() {
    if(this.state.Professor=='true'){
      return (
        <Container style={{backgroundColor:'#f8f8f8'}}>
        <Header style={{backgroundColor:'#0a4e87'}}></Header>
        <Content>
          <Card style={{flex: 0, borderColor: '#0a4e87', borderWidth: 2}}>
            <CardItem>
              <Left>
                <Thumbnail/>
                <Body>
                  <Text style={{fontWeight:'bold'}}>{this.state.userName}</Text>
                  <Text note>{f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
              <View style = {styles.logoContainer}>
                <Image style = {styles.logo} source={require('../img/FULLTEACH.jpg')}/>
              </View>
                <Text style={{fontWeight:'bold'}}> Informacion: </Text>
                <Text> {this.state.desprof} </Text>
                
                <Text style={{fontWeight:'bold'}}> Correo: </Text>
                <Text> {this.state.emailprof} </Text>
                
                <Text style={{fontWeight:'bold'}}> Es profesor de: </Text>
                <Text> {this.state.mat1prof} </Text>
                <Text> {this.state.mat2prof} </Text>
                
                <Text style={{fontWeight:'bold'}}> Sus horarios son: </Text>
                <Text> {this.state.hor1prof} </Text>
                <Text> {this.state.hor2prof} </Text>
                
                <Text style={{fontWeight:'bold'}}> El precio de su hora: </Text>
                <Text> ${this.state.precioprof} </Text>
              </Body>
            </CardItem>
            <CardItem>

                <Text style={styles.note}>*Para realizar algun cambio, comunicarse a: admfullteach@gmail.com</Text>
              
            </CardItem>
          </Card>
          
        </Content>
        <TouchableOpacity style={styles.btn} onPress={this.logout}>    
          <Text style={styles.white}>SIGN OUT</Text>
        </TouchableOpacity>
        <Text> {''} </Text>
      </Container>
        

    );
    }else{
      return (

        <Container style={{backgroundColor:'#f8f8f8'}}>
        <Header style={{backgroundColor:'#0a4e87'}}></Header>
        <Content>
          <Card style={{flex: 0, borderColor: '#0a4e87', borderWidth: 2}}>
            <CardItem>
              <Left>
                <Thumbnail/>
                <Body>
                  <Text style={{fontWeight:'bold'}}>{this.state.userName}</Text>
                  <Text note>{f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
              <View style = {styles.logoContainer}>
              <Image style = {styles.logo} source={require('../img/FULLTEACH.jpg')}/>
              </View>
                <Text style={{fontWeight:'bold'}}> Informacion: </Text>
                <Text>
                  Todavia no posees informacion a mostrar, ¿que esperas para ser profesor y dar a conocer tu conocimiento a todos? ¡Unete ya! Podras atender todo tipo de estudiantes en las materias donde demuestres un gran dominio.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{paddingLeft:100}}>
             <TouchableOpacity style={styles.registerbtn} onPress={this.bprofe}>    
                <Text style={styles.blue}>¡CONVIERTETE EN PROFESOR!</Text>
              </TouchableOpacity>
            </CardItem>
          </Card>
          
        </Content>
        <TouchableOpacity style={styles.btn} onPress={this.logout}>    
          <Text style={styles.white}>SIGN OUT</Text>
        </TouchableOpacity>
        <Text> {''} </Text>
      </Container>

    );
    } 
  }

  logout = () => {
      try {
        Firebase.getAuth().signOut();
        this.setState({
          response:'user log out'
        })
        
          this.props.navigation.navigate('Entrada');
        


      }catch(error){
        alert(error.toString());
        this.setState({
          response: error.toString()

        })
      }
  }

  bprofe = () => {
    this.props.navigation.navigate('SerProfesor');
  }

}

  



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  text: {
    color: '#0a4e87'
  },
  registerbtn: {
    alignSelf: 'stretch',
    backgroundColor:'transparent',
    padding:10,
    alignItems: 'center',

  },
  note:{
    fontSize: 10,
    color: '#0a4e87'
  },
  white: {
    color: 'white',
    fontWeight: 'bold'

  },
  blue: {
    color: '#0a4e87',
    fontWeight: 'bold'

  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor:'#0a4e87',
    padding:10,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30
    
  },
  logoContainer:{
    alignItems: 'center',
    justifyContent:'center',
    flexGrow: 0.4,
    paddingLeft:120
  },
  logo: {
    width:130,
    height: 130,

  },
});
