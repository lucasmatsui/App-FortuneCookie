/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import cookie from './cookie.png';


import Botao from './components/Botao';

const App = () => {
  const phrases = [
    'A vida trará coisas boas se tiveres paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente todo dia arruma os cabelos, por que não o coração',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.',
    'Siga os bons e aprenda com eles.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.'
];

  const [phrase, setPhrase] = useState('');

  function brokeCookie() {
    let r = Math.floor(Math.random() * phrases.length);
    let text = phrases[r];
    setPhrase(text);
  }

  return (
    <View style={styles.body}>
      <Image style={styles.cookie} source={cookie} />
      <Text style={styles.phrase}>
        {phrase ? `"${phrase}"` : "..." }
      </Text>
      <Botao color="#b55" onPress={brokeCookie}/>
    </View>

  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:30,
    backgroundColor:'#f5f5f5'
  },
  cookie: {
    marginBottom: 0
  },
  phrase: {
    alignSelf:'stretch',
    textAlign:'center',
    marginVertical:30,
    padding:15,
    backgroundColor:'#FFF',
    fontWeight:'300',
    elevation:2,
    borderRadius: 5,
    color: '#b55',
    fontSize: 17,
    fontStyle: 'italic',
  }
});

export default App;
