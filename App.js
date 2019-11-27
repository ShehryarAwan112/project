import React,{Component} from 'react'

import {View,Text,TouchableOpacity,Button} from 'react-native'


export default class App extends Component{
  render(){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
        <Text style={{fontWeight:'bold',fontSize:22}}>  Hellow World</Text>
      <Text style={{color:'blue',fontStyle:'italic',fontSize:24,}}>Bilal</Text>
  <TouchableOpacity onPress={()=>{
    alert('hellow')
  }}>
    <Text style={{borderWidth:1,borderRadius:10}}>On Press </Text>
    </TouchableOpacity>
  <Text>gooo</Text>
  <Text>danger</Text>
    </View>
    )
  }
}