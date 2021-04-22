import React, {useRef, useEffect} from "react";
import { TextInput } from "../components/Auth/AuthShared";
import AuthLayout from "../components/Auth/AuthLayout";
import AuthButton from "../components/Auth/AuthButton";
import { useForm } from "react-hook-form";

export default function Login({ navigation }) {
    const {register, handleSubmit, setValue} = useForm();
    const passwordRef = useRef();

    const onNext = (nextOne) => {
        nextOne?.current?.focus();
      };
    
    const onValid = (data) => {
        console.log(data);
    }

    useEffect(() => {
        register("username");
        register("password");
    }, [register])
  return (
    <AuthLayout>
      <TextInput
        placeholder="Username"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        onSubmitEditing={() => onNext(passwordRef)}
        returnKeyType="next"
        autoCapitalize={"none"}
        onChangeText={(text)=> setValue("username", text)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        keyboardType="visible-password"
        secureTextEntry={true}
        onSubmitEditing={handleSubmit(onValid)}
        returnKeyType="done"
        returnKeyLabel="join"
        onChangeText={(text)=> setValue("password", text)}
        lastOne={true}
      />
      <AuthButton disabled={false} text={"Login"} onPress={handleSubmit(onValid)} />
    </AuthLayout>
  );
}
