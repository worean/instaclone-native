import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components/native";
import AuthButton from "../components/Auth/AuthButton";
import AuthLayout from "../components/Auth/AuthLayout";
import { TextInput } from "../components/Auth/AuthShared";

export default function CreateAccount() {
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register("firstName");
    register("lastName");
    register("email");
    register("userName");
    register("password");
  }, [register]);

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onValid = (data) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <TextInput
        placeholder="First Name"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
        onChangeText={(text) => setValue("firstName",text)}
      />
      <TextInput
        ref={lastNameRef}
        placeholder="Last Name"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        onSubmitEditing={() => onNext(userNameRef)}
        returnKeyType="next"
        onChangeText={(text) => setValue("lastName",text)}
      />
      <TextInput
        ref={userNameRef}
        placeholder="User Name"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        onSubmitEditing={() => onNext(emailRef)}
        onChangeText={(text) => setValue("userName",text)}
        returnKeyType="next"
      />
      <TextInput
        ref={emailRef}
        placeholder="E-mail Address"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        keyboardType="email-address"
        onSubmitEditing={() => onNext(passwordRef)}
        onChangeText={(text) => setValue("email",text)}
        returnKeyType="next"
      />
      <TextInput
        ref={passwordRef}
        placeholder="password"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        keyboardType="visible-password"
        secureTextEntry={true}
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => setValue("password",text)}
        returnKeyType="done"
        returnKeyLabel="join"
        lastOne={true}
      />
      <AuthButton
        disabled={false}
        text={"Create Account"}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
