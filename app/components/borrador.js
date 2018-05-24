login = () => {
// corregir
      alert('prueba');
      fetch('https://fullteach-82c40.firebaseio.com/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      })

      .then((response) => response.json())
      .then((res) => {

          if (res.success === true) {
            AsyncStorage.setItem('user',res.user);
            this.props.navigation.navigate('Profile');
          }
          else{
            alert(res.message);
          }
      })
      .done();
}



import { createStackNavigator } from 'react-navigation';
const Application = createStackNavigator ({
  Home: { screen: Login },
  Profile: { screen: Profile },
  }, {
    navigationOptions: {
      header: null,
    }
});

export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="ios-menu" onPress={() =>
              this.props.navigation.navigate('DrawerOpen')} />
          </Left>
        </Header>
        <Content contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text> AREA DE MIEMBROS (EN DESARROLLO) </Text>
        </Content>
      </Container>

    );
  }
}

const Application = createDrawerNavigator ({
  //Home: { screen: Login },
  Profile: { screen: Profile },
})

return (

  <View style ={styles.container}>
    <Text> {this.state.userName} </Text>
    <Text> {this.state.Professor} </Text>
    
    <Text style ={styles.text}>- AREA DE PROFESORES (EN DESARROLLO) -</Text>

    <TouchableOpacity
    style = {styles.registerbtn}
      onPress={this.logout}>
      <Text> SIGN OUT</Text>
    </TouchableOpacity>
  </View>

);

<Input autoCapitalize="none" placeholder="EMAIL" onChangeText={(email) => this.setState({email})}/>