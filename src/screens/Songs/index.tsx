import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, Dimensions } from 'react-native';

import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
// import List from '../../Components/List';

const height = Dimensions.get('window').height;

// import {useSelector} from 'react-redux';
const Songs = ({ navigation }) => {
  // const credentials = useSelector(state => state.user);
  // console.log(`Songs\n => ${credentials.token}`)
  function logout() {
    console.log('logout')
    navigation.navigate('Login');
  }

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={styles.container}>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#292929',

  },
  logoutBox: {
    alignSelf: 'center',
    backgroundColor: '#f00',
    justifyContent: 'center',
    width: '30%',
    paddingVertical: 2,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: '10%'
  },
  textBox: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: height * 0.019,
    marginBottom: 10
  }
});

export default Songs;