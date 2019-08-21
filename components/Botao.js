import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Botao = (props) => {
  return (
    <TouchableOpacity style={[styles.botao, {backgroundColor:props.color}]} onPress={props.onPress}>
      <View>
        <Text style={styles.text}>Quebrar biscoito</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    width:250,
    height:50,
    borderRadius:5,
    justifyContent:'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
  }
});

export default Botao;