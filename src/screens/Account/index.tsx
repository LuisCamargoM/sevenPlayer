import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, TextInput, Text, View, Image, Dimensions, KeyboardAvoidingView, TouchableOpacity, Animated } from 'react-native';

import { useDispatch } from 'react-redux';
import { Container, ContainerLogo, Logo, ContainerButton, LoginButton, LoginButtonText, ContainerFooter, ContainerFooterText } from './style';
const height = Dimensions.get('window').height;

const Account = ({ navigation }) => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [btnStatus, setBtnStatus] = useState('LOGIN');


  const signIn = () => {
    setLoading(false);
  }

  return (
    <Container>      
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'#f00',
    flex: 1,
    marginTop: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  logo: {
    marginTop: '10%',
    width: 200,
    height: 250,
    // margin:20
  },
  btnSubmit: {
    backgroundColor: '#00D55D',
    width: '65%',
    height: 45,
    marginTop: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  btnSubmitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: height * 0.02,
  },
  btnSubmitTextLoading: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: height * 0.016,
  },
  btnForgetPasswd: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerAccounts: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 50,
  },
  containerAccountsText: {
    fontWeight: 'bold',
    fontSize: height * 0.014,
    padding: 5,
    color: '#fff'
  },
  containerAccountsTextNew: {
    fontWeight: '800',
    fontSize: height * 0.015,
    color: '#39ff14'
  },
  suporteBox: {
    marginBottom: '10%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor:'#f00'
  }
});

export default Account;