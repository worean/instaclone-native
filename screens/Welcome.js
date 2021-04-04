import React from 'react'
import {Text, View, TouchableOpacity, Image} from 'react-native'
import styled from 'styled-components/native'
import {colors} from '../color.js'
const Container = styled.View`
    flex:1;
    background-color:black;
    align-items:center;
`;

const CreateAccount = styled.View`
    background-color:${colors.blue};
    padding: 5px 10px;
`;
const CreateAccountText = styled.Text`
    color:white;
`;

const LoginLink = styled.Text`
    color:${colors.blue};
    font-weight:600;
    margin-top: 10px;
`;

const Logo = styled.Image`
    max-width:50%;
`;


export default function Welcome({navigation, route}) {
    return (
        <Container>
            <Logo resizeMode="contain" source={require("../assets/logo.png")}/>
            <TouchableOpacity>
                <CreateAccount>
                    <CreateAccountText>Create Account</CreateAccountText>
                </CreateAccount>
            </TouchableOpacity>
            <TouchableOpacity>
                <LoginLink>Login</LoginLink>
            </TouchableOpacity>
        </Container>
    );
}