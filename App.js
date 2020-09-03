//This is an example code to understand TextInput// 
import React from 'react';
//import react in our code.
import { TextInput, View, StyleSheet, Text , Button ,Image } from 'react-native';
//import all the components we are going to use. 
export default class App extends React.Component {
  onPressLearnMore(){
    alert('Login Successful');
  } 
  constructor(props) {
   super(props);
   this.state = {username: '', password:''};
   this.state = {valx:0, valy:1000};
    setInterval(() => {
      this.setState({valx : this.state.valx+1});
      this.setState({valy : this.state.valy-1});
    }, 1000);
 }

 render() {
   return (
     <View style={styles.container}>
       <Text style={{color: 'cyan'}}>{this.state.username}</Text>

       <Image source={{uri: 'https://raw.githubusercontent.com/fulkkie24/CPSC471HW/master/unnamed.png'}}
       style={{width: 100, height: 100}} />

       <Text>{"\n"}From Login{"\n"}{"\n"}</Text>
       <TextInput
         value={this.state.username}
         onChangeText={(username) => this.setState({ username })}
         placeholder={'Username'}
         style={styles.input}
       />
        <TextInput
         value={this.state.password}
         onChangeText={(password) => this.setState({ password })}
         placeholder={'password'}
         style={styles.input}
       />
       <Button
         onPress={this.onPressLearnMore}
         title="Login"
         color="#841584"
        />
        <Text>{"\n"}{"เวลาที่เข้าใช้ระบบ "+this.state.valx}</Text>
        <Text>{"\n"}{"เวลาที่เหลือ "+this.state.valy}</Text>
     </View>
   );
 }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#ffffff',
   paddingTop: 50,
 },
 input: {
   width: 250,
   height: 44,
   padding: 10,
   marginBottom: 10,
   backgroundColor: '#ecf0f1'
 },
 stretch: {
  width: 50,
  height: 200,
  resizeMode: 'stretch',
},
});