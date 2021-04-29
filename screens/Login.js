import React, { useRef, useEffect } from "react";
import { TextInput } from "../components/Auth/AuthShared";
import AuthLayout from "../components/Auth/AuthLayout";
import AuthButton from "../components/Auth/AuthButton";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { loggedInUser } from "../apollo";

const LOGIN_MUTATION = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function Login({ navigation, route }) {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      password: route.params?.password,
      userName: route.params?.userName,
    },
  });
  const passwordRef = useRef();
  const onCompleted = async (data) => {
    const {
      login: { ok, token },
    } = data;
    if (ok) {
      // Loggin 상태로 전환한다.
      console.log("Success!!");
      await loggedInUser(token);
    }
  };
  const [logInMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });
  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };

  const onValid = (data) => {
    if (!loading) {
      logInMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  useEffect(() => {
    register("userName");
    register("password");
  }, [register]);
  return (
    <AuthLayout>
      <TextInput
        values={watch("userName")}
        placeholder="Username"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        onSubmitEditing={() => onNext(passwordRef)}
        returnKeyType="next"
        autoCapitalize={"none"}
        onChangeText={(text) => setValue("userName", text)}
      />
      <TextInput
        values={watch("password")}
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        keyboardType="visible-password"
        secureTextEntry={true}
        onSubmitEditing={handleSubmit(onValid)}
        returnKeyType="done"
        returnKeyLabel="join"
        onChangeText={(text) => setValue("password", text)}
        lastOne={true}
      />
      <AuthButton
        disabled={!watch("userName") || !watch("password")}
        loading={loading}
        text={"Login"}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
