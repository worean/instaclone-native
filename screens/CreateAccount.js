import { gql, useMutation } from "@apollo/client";
import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components/native";
import AuthButton from "../components/Auth/AuthButton";
import AuthLayout from "../components/Auth/AuthLayout";
import { TextInput } from "../components/Auth/AuthShared";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $userName: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;

export default function CreateAccount({ navigation }) {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const onCompleted = (data) => {
    console.log(data);
    const {
      createAccount: { id},
    } = data;
    const { userName, password } = getValues();
    if (id) {
      navigation.navigate("Login", {
        userName,
        password,
      });
    }
  };
  const [createAccountMutation, { loading }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    {
      onCompleted,
    }
  );

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onValid = (data) => {
    if (!loading) {
      createAccountMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  useEffect(() => {
    register("firstName", {
      required: true,
    });
    register("lastName"),
      {
        required: true,
      };
    register("email", {
      required: true,
    });
    register("userName", {
      required: true,
    });
    register("password", {
      required: true,
    });
  }, [register]);
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <AuthLayout>
      <TextInput
        placeholder="First Name"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        onChangeText={(text) => setValue("firstName", text)}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        onSubmitEditing={() => onNext(userNameRef)}
        returnKeyType="next"
        onChangeText={(text) => setValue("lastName", text)}
      />
      <TextInput
        ref={userNameRef}
        placeholder="User Name"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        onSubmitEditing={() => onNext(emailRef)}
        onChangeText={(text) => setValue("userName", text)}
        returnKeyType="next"
      />
      <TextInput
        ref={emailRef}
        placeholder="E-mail Address"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        keyboardType="email-address"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("email", text)}
        returnKeyType="next"
      />
      <TextInput
        ref={passwordRef}
        placeholder="password"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        keyboardType="visible-password"
        secureTextEntry={true}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => setValue("password", text)}
        returnKeyType="done"
        returnKeyLabel="join"
        lastOne={true}
      />
      <AuthButton
        disabled={false}
        text={"Create Account"}
        loading={loading}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
