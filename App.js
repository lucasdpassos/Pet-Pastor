import React, { Component, useState, useEffect } from 'react';
import { 
  View,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Animated
  
} from 'react-native';

export default function App() {

     
    const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}))

    useEffect(()=> {
      Animated.spring(offset.y, {
        toValue: 0,
        speed:4,
        bounciness: 20
      }).start()
    }, [])

        return (
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Image
          source={require('./src/assets/pastor.png')} />
        </View>

        <Animated.View style={[styles.container, {
          transform: [
            {
              translateY: offset.y
            }
          ]
        }]}>
          <TextInput 
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {
            
          }}
          />
          <TextInput 
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {

          }}
          />

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.submitText}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCalendar}>
            <Text style={styles.submitText}>Cadastro</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
    )


  }
  


const styles = StyleSheet.create({
  background: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#231f20'   

  },
  containerLogo: {
    flex:1,
    justifyContent:'center'
  },
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%'
   
   

  },
  input: {   
    backgroundColor:'azure',
    borderBottomWidth:3, 
    borderBottomColor:'grey',
    width:'90%',
    marginBottom:15,
    color:'#35AAFF',
    fontSize:17,
    borderRadius:7,
    padding:10
  },
  btnSubmit: {
    backgroundColor:'#24feff',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7

  },
  submitText: {
    color:'#231f20',
    fontSize:18
  },
  btnCalendar: {
    backgroundColor:'#6497b1',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
    marginTop:5

  }
})