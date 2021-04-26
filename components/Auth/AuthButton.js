import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import {colors} from "../../color"

const Button = styled.TouchableOpacity`
    background-color:${colors.blue};
    padding: 10px 10px;
    border-radius : 5px;
    width:80%;
    opacity:${(props) => props.disabled ? 0.5 : 1}
`;

const ButtonText = styled.Text`
    color:white;
    text-align:center;
`;


export default function AuthButton({ onPress, disabled, text, loading }) {
  return (
    <Button disabled={disabled} onPress={onPress}>
      {loading ? <ActivityIndicator color="white"/> : <ButtonText>{text}</ButtonText>}
    </Button>
  );
}
