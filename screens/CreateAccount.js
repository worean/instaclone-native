import React from 'react'
import {Text, TextInput, View} from 'react-native'
import styled from 'styled-components/native'
import AuthButton from '../components/Auth/AuthButton';
import AuthLayout from '../components/Auth/AutoLayout';

export default function CreateAccount() {
    return (
      <AuthLayout>
        <TextInput
          placeholder="User Name"
          placeholderTextColor="grey"
          style={{ backgroundColor: "white", width: "100%" }}
          returnKeyType="next"
        />
        <TextInput
          placeholder="E-mail Address"
          placeholderTextColor="grey"
          keyboardType="email-address"
          style={{ backgroundColor: "white", width: "100%" }}
          returnKeyType="next"
        />
        <TextInput
          placeholder="E-mail Address"
          placeholderTextColor="grey"
          keyboardType="email-address"
          style={{ backgroundColor: "white", width: "100%" }}
          returnKeyType="next"
        />
        <AuthButton disabled={false} text={"Create Account"} />
      </AuthLayout>
    );
}