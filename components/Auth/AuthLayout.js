import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;

const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
`;

export default function AuthLayout({ children }) {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard} disabled = {Platform.OS === "web"}>
      <Container>
        <KeyboardAvoidingView
          style={{
            width: "80%",
            alignItems: "center",
          }}
          behavior="padding"
          keyboardVerticalOffset={Platform.OS == "ios" ? 50 : 0}
        >
          <Logo
            resizeMode="contain"
            source={require("../../assets/logo.png")}
          />
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
