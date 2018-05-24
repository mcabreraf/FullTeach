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
    header: false,
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#0a4e87',
    },
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='ios-person' style={{ color: tintColor }} />
    }
  }

  constructor(props){
    super(props)
    this.state = {
      userName: '',
      Professor: ''
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
    }catch(error){
      console.log(error)
    }


    }

   

  render() {
    if(this.state.Professor=='true'){
      return (
        <Container style={{backgroundColor:'#fff'}}>
        <Header style={{backgroundColor:'#0a4e87'}}></Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://orig00.deviantart.net/5d63/f/2018/026/a/3/jordi_enp_el_nino_polla_by_tkrfx-dc18jjk.jpg'}} />
                <Body>
                  <Text style={{fontWeight:'bold'}}>{this.state.userName}</Text>
                  <Text note>{f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://www.moreloshabla.com/wp-content/uploads/2018/02/long-1-776x343.jpg'}} style={{height: 200, width: 370, flex: 1}}/>
                <Text style={{fontWeight:'bold'}}> Informacion: </Text>
                <Text>
                Manuel "El Niño Polla", también conocido como Manuel ENP o Mañe, es un actor porno español.​ Actualmente trabaja para Brazzers, ​ una productora pornográfica. En noviembre de 2016, fue nominado para "Mejor novato masculino" en los Premios AVN.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
        

    );
    }else{
      return (

        <View style ={styles.container}>
          <Text> {this.state.userName} </Text>
          <Text> {this.state.Professor} </Text>
          
          <Text style ={styles.text}>- AREA DE MIEMBROS (EN DESARROLLO) -</Text>

          <TouchableOpacity
          style = {styles.registerbtn}
            onPress={this.logout}>
            <Text> SIGN OUT</Text>
          </TouchableOpacity>
        </View>

    );
    } 
  }

  logout = () => {
      try {
        Firebase.getAuth().signOut();
        this.setState({
          response:'user log out'
        })
        setTimeout(() => {
          this.props.navigation.navigate('Login');
        }, 1200);


      }catch(error){
        alert(error.toString());
        this.setState({
          response: error.toString()

        })
      }
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
});
