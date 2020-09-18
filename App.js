import React from 'react';
import { StyleSheet, View, Text, Image,
   Button, TouchableOpacity,TextInput } from 'react-native';
import oge from './assest/image5.png';

const App = () => {

  const handleGreet =()=>{
      console.log("Hello Oge")
    alert("Hello Oge, congrates on becoming a successful mobile developer")
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={oge} />
      <Text style={styles.text}>Oge is now a mobile developer</Text>
      <TextInput style={styles.textInput}/>
      <TouchableOpacity
        style={styles.button}
        onPress={handleGreet}
      >
        <Text style={styles.buttonText}>Greet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#ffffff',
    paddingHorizontal:20
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    alignSelf:'center'
  },
  image: {
    borderRadius: 150,
    alignSelf:'center'
  },
  button: {
    backgroundColor: 'red',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  },
  textInput:{
    borderWidth:1,
    marginVertical:20,
    paddingHorizontal:8,
    borderRadius:20,
  }

});

export default App;
