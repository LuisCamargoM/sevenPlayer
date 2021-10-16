import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Container, ContainerLogo, Logo, ContainerButton, LoginButton, LoginButtonText, ContainerFooter, ContainerFooterText } from './style';

import { getToken } from '../../../api';
import { Alert } from 'react-native';
const Login = ({ navigation }) => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [btnStatus, setBtnStatus] = useState('LOGIN');


  const signIn = async () => {
    const access_token = await getToken();    
    if (access_token !== undefined || access_token !== '') {
      console.log(access_token);
      dispatch({
        type: 'LOGIN',
        token: access_token,
      })
      navigation.navigate('Songs')
    }
  }

  return (
    <Container>
      <ContainerLogo>
        <Logo source={require('../../assets/logo.png')} />
      </ContainerLogo>
      <ContainerButton>
        <LoginButton disabled={loading} onPress={signIn}>
          <LoginButtonText>
            {btnStatus}
          </LoginButtonText>
        </LoginButton>
      </ContainerButton>
      <ContainerFooter>
        <ContainerFooterText>Developed by Apps @2021</ContainerFooterText>
      </ContainerFooter>
    </Container>
  );
}
export default Login;