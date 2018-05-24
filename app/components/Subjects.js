import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Firebase from './firebase';
import Helpers from './Helpers';
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


export default class Subject extends React.Component {
  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => {
      return <Icon name='ios-book-outline' style={{ color: tintColor }} />
    }
  }

  constructor(props){
    super(props)
      this.state = {
        mats: ''
      }
  }

  async componentWillMount(){
    this.setState({ 
      mats: Helpers.getMaterias() 
    })
  }
  render() {
    return (
      <Content>
      <Header style={{backgroundColor:'#0a4e87'}}></Header>
      <View style ={styles.container}>
        <Text style ={styles.header}> MATERIAS DISPONIBLES </Text>
      </View>
      <List>
          <ListItem>
            <Text>Test 1</Text>  
          </ListItem>
          <ListItem>
            <Text>Test 2</Text>  
          </ListItem>
        </List>
      </Content>
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
