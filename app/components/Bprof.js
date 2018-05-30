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

export default class Bprof extends React.Component {

    regresar = () => {
        this.props.navigation.goBack();
    }

  render() {
    return (
        <Container>
        <Header style={{backgroundColor:'#0a4e87'}}></Header>
        <View style ={styles.container}>
        
         <Text style ={styles.header}> ¿Te gustaria ser profesor de FULLTEACH? </Text>
        <View style = {styles.logoContainer}>
          <Image style = {styles.logo}
            //source={{uri: 'http://www.artisticquiltdesign.com/wp-content/uploads/png-logos-logo-creator-png-png-logo-design-transparent-png-images-pluspng.png'}}
            source={require('../img/FULLTEACH.jpg')}
            />
        </View>
        <Text style={{fontSize:13}}>Para ser profesor, debe comunicarse al correo:   </Text>
        <Text style={{fontWeight:'bold',fontSize:13}}>admfullteach@gmail.com </Text>
        <Text style={{fontSize:13}}>Debe solicitar 'Ser un profesor' y adjuntar los siguientes documentos: </Text>
        <Text style={{fontSize:13}}>1. Hoja de vida. </Text>
        <Text style={{fontSize:13}}>2. Prueba de titulos obtenidos (fotos, actas, etc.)</Text>
        <Text style={{fontWeight:'bold',fontSize:13}}>Tambien debe mencionar los siguientes aspectos:</Text>
        <Text style={{fontSize:13}}>1. Materia a la que se postula.</Text>
        <Text style={{fontSize:13}}>2. Mencionar dos posibles horarios de atencion. </Text>
        <Text style={{fontSize:13}}>3. Dar un precio por hora de sus clases.</Text>
        <Text style={{fontWeight:'bold',fontSize:13}}>Recuerde: </Text>
        <Text style={{fontSize:13}}>1. Solo puede inscribirse a una materia a la vez. </Text>
        <Text style={{fontSize:13}}>2. Solo puede ser profesor de dos materias a la vez.</Text>
        <Text style={{fontSize:13}}>3. Solo puede tener dos horarios posibles.  </Text>
        <Text style={{fontSize:13}}>4. Solo puede tener un precio unico por sus clases.</Text>
        <Text>{''}</Text>
        <Text style={{fontSize:13}}>EL NO CUMPLIR CON ESTAS CONDICIONES, PUEDE INFLUIR FUERTEMENTE EN SU PROCESO PARA SER PROFESOR</Text>
         
          

          <TouchableOpacity
            style = {styles.btn}
            onPress={this.regresar}>
            <Text style = {styles.white}> REGRESAR </Text>

          </TouchableOpacity>

          <View>

          </View>
        </View>
        </Container>
    );
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
