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
  Right,
  Body,
  Center,
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
import * as firebase from 'firebase';
import Helpers from './Helpers';
export default class Infoprof extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='ios-book-outline' style={{ color: tintColor }} />
    }
  }
  constructor(props){
    super(props)
      this.state = {
        nameprof: '',
        emailprof: '',
        hor1prof: '',
        hor2prof: '',
        desprof: '',
        precioprof: ''
      }
      
  }
  
  async componentWillMount(){
    var {params} = this.props.navigation.state;
    var route = params.it
      Helpers.getNameProf(route,(item1)=>{
        this.setState({
            nameprof: item1
        })
      })
      Helpers.getEmailProf(route,(item2)=>{
        this.setState({
            emailprof: item2
        })
      })
      Helpers.getHor1Prof(route,(item3)=>{
        this.setState({
            hor1prof: item3
        })
      })
      Helpers.getHor2Prof(route,(item4)=>{
        this.setState({
            hor2prof: item4
        })
      })
      Helpers.getDesProf(route,(item5)=>{
        this.setState({
            desprof: item5
        })
      })
      Helpers.getPrecioProf(route,(item6)=>{
        this.setState({
            precioprof: item6
        })
      })
    
  }
  
  contacto= () => {
    var mes = this.state.emailprof
    alert("Email: "+mes)
  }
  inicio= () => {
    this.props.navigation.navigate('Profile')
  }
  regresar= () => {
    this.props.navigation.goBack()
  }

  render() {
    var {params} = this.props.navigation.state;
    return (
       <Container style={{backgroundColor:'#f8f8f8'}}>
       <Header style={{backgroundColor:'#0a4e87'}}></Header>
       <View style ={styles.container}>
        <Text style ={styles.header}> INFORMACION PROFESOR </Text>
      </View>
       <Content>
         <Card style={{flex: 0, borderColor: '#0a4e87', borderWidth: 2}}>
           <CardItem>
             <Left>
              <Thumbnail/>
               <Body>
                 <Text style={{fontWeight:'bold'}}>Profesor {this.state.nameprof}</Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem>
             <Body>
               
               <Text style={{fontWeight:'bold'}}> Informacion del profesor: </Text>
               <Text>
                 {this.state.desprof}
               </Text>
               <Text> {''} </Text>
               <Text style={{fontWeight:'bold'}}> Horarios del profesor: </Text>
               <Text> * {this.state.hor1prof} </Text>
               <Text> * {this.state.hor2prof} </Text>
               <Text> {''} </Text>
               <Text style={{fontWeight:'bold'}}> Precio por hora del profesor: </Text>
               <Text> ${this.state.precioprof} </Text>
             </Body>
           </CardItem>
           <CardItem>
             
               <TouchableOpacity style={styles.btn} onPress={this.contacto}>    
                 <Text style={styles.white}>CONTACTO</Text>
               </TouchableOpacity>
             
           </CardItem>
         </Card>
        
       </Content>
       <TouchableOpacity style={styles.btn} onPress={this.regresar}>    
          <Text style={styles.white}>REGRESAR</Text>
        </TouchableOpacity>
        <Text> {''} </Text>
        <TouchableOpacity style={styles.btn} onPress={this.inicio}>    
          <Text style={styles.white}>INICIO</Text>
        </TouchableOpacity>
        <Text> {''} </Text>
     </Container>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  listView:{
    flex: 1,
  },
  li:{
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft:16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText:{
    color: '#333',
    fontSize:16,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft: 40,
    paddingRight: 40,
  },
  container2:{
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
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
    justifyContent: 'center',
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
    fontWeight: 'bold',
    color: 'white',
  },
  btn: {
    
    alignSelf: 'stretch',
    backgroundColor:'#0a4e87',
    padding:10,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30
    
  },
  registerbtn: {
    alignSelf: 'stretch',
    backgroundColor:'transparent',
    padding:10,
    alignItems: 'center',
  },
});