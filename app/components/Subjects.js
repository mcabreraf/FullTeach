import React from 'react';
import { StyleSheet, View, Image, ListView, TouchableOpacity } from 'react-native';
import Firebase from './firebase';
import Helpers from './Helpers';
import ProfByMat from './ProfByMat';
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
    var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
      this.state = {
        mats: ds
      }

      this.itemsRef = this.getRef().child('Materia');
      this.renderRow = this.renderRow.bind(this);
      this.pressRow = this.pressRow.bind(this);
  }
  getRef(){
    return Firebase.getRef();
  }
  getItems(itemsRef){
    itemsRef.on('value',(snap)=> {
      let items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().name,
          _key: child.key
        })
      });
      this.setState({
        mats: this.state.mats.cloneWithRows(items)
      });
    })
    
  }
  async componentWillMount(){
    this.getItems(this.itemsRef);
  }
  async componentDidMount(){
    this.getItems(this.itemsRef);
  }
  pressRow(item){
    console.log(item);
  }
  renderRow(item){
    var {navigate} = this.props.navigation;
    return(
      <TouchableOpacity onPress={()=>navigate('Profesores',{name:item.title, it:item._key})}>
        <View style={styles.li}>
          <Text style={styles.liText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
    );
  }
  
  
  render() {
    
    const {mats} = this.state;
    return (
      <Container style={{backgroundColor:'#f8f8f8'}}>
      <Header style = {{backgroundColor:'#0a4e87'}}></Header>
      <View style = {styles.container}>
        <Text style = {styles.header}> MATERIAS DISPONIBLES </Text>
      </View>
      <View style = {styles.container2}>
      <ListView dataSource={this.state.mats} renderRow={this.renderRow}/> 
      </View>
      
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
    backgroundColor: '#f8f8f8',
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
    backgroundColor: '#f8f8f8',
    paddingLeft: 40,
    paddingRight: 40,
  },
  container2:{
    flex: 1,
    backgroundColor: '#f8f8f8',
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