import React from 'react'
import {Text, View, TouchableOpacity, Image} from 'react-native'
import styled from 'styled-components/native'
import {colors} from '../color.js'
import AuthButton from '../components/Auth/AuthButton';
import AuthLayout from '../components/Auth/AuthLayout';

import CreateAccount from './CreateAccount.js';

const LoginLink = styled.Text`
    color:${colors.blue};
    font-weight:600;
    margin-top: 20px;
`;


export default function Welcome({ navigation, route }) {
  const GoToCreateAccount = () => navigation.navigate("CreateAccount");
  const GoToLogin = () => navigation.navigate("Login");
  return (
    <AuthLayout>
      <AuthButton disabled={false} onPress={GoToCreateAccount} text={"Create New Account"} />
      <TouchableOpacity onPress={GoToLogin}>
        <LoginLink>Login</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}