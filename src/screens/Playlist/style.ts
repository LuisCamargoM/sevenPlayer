import styled from "styled-components/native"
import { Dimensions } from "react-native";
const height = Dimensions.get('window').height;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: #181414
`;
export const ContainerLogo = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 20%;

`;
export const Logo = styled.Image`
    margin-top: 10%;
    width: 200px;
    height: 250px;
`;
export const ContainerButton = styled.View`
    flex: 1;
    margin-top: 40%;
    align-items: center;
    justify-content: center;
    width: 90%;
`;
export const LoginButton = styled.TouchableOpacity`
background: #00D55D;
width: 65%;
height: 45px;
margin-top: 15px;
border-radius: 8px;
align-items: center;
justify-content: center;
font-weight: bold
`;
export const LoginButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: ${height* 0.02}px ;
`;

export const ContainerFooter = styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 50px;
`;

export const ContainerFooterText = styled.Text`
    font-weight: bold;
    font-size: ${height* 0.014}px ;
    padding: 5px;
    color: #fff
    `;