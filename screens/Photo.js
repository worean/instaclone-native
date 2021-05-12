import React, { useState } from "react";
import { View, Text, useWindowDimensions, TouchableOpacity } from "react-native";
import {Ionicons} from "@expo/vector-icons";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/core";

const Container = styled.View`
  border: 1px solid white;
`;
const Header = styled.TouchableOpacity`
  padding: 20px 10px;
  flex-direction: row;
  align-items: center;
`;
const UserAvatar = styled.Image`
  margin-right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 12.5;
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
`;
const File = styled.Image``;
const Actions = styled.View`
  flex-direction:row;
  align-items:flex-end;
`;
const Action = styled.TouchableOpacity`
  margin-right: 10px;
`;
const Caption = styled.View`
  flex-direction: row;
  color: white;
  margin-left: 10px;
`;
const CaptionText = styled.Text`
  color:white;
  margin: 5px 0px;
`;
const Likes = styled.Text`
  color:white;
`;

const CaptionContainer = styled.View`
  padding:10px;
`;

function Photo({ id, user, caption, file, isLiked, likes }) {
  // Window에서 dimension을 가져온다.
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const [imageHeight, setImageHeight] = useState(height - 350);
  useEffect(() => {
    Image.getSize(file, (width, height) => {
      setImageHeight(height / 3);
    });
  }, [file]);
  return (
    <Container>
      <Header onPress={() => navigation.navigate("Profile")}>
        <UserAvatar
          resizeMode="cover"
          source={{ uri: user.avatar }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
        />
        <Username>{user.userName}</Username>
      </Header>
      <File
        resizeMode="cover"
        style={{
          width, // Dimention에서 가져온다.
          height: height - 350, // 상세 조정 필요
        }}
        source={{ uri: file }}
      />
      <CaptionContainer>
        <Actions>
          <Action>
            <Ionicons
              onPress={() => {
                // Like Query를 보내야한다.
              }}
              name={isLiked ? "heart" : "heart-outline"}
              color={isLiked ? "tomato" : "white"}
              size={20}
            />
          </Action>
          <Action>
            <Ionicons
              onPress={() => navigation.navigate("Comments")}
              name="chatbubble-outline"
              color="white"
              size={20}
            />
          </Action>
        </Actions>
        <TouchableOpacity onPress={() => navigation.navigate("Likes")}>
          <Likes>{likes === 1 ? "1 like" : `${likes} likes`}</Likes>
        </TouchableOpacity>
        <Caption>
          <Username>{user.userName}</Username>
          <CaptionText>{caption}</CaptionText>
        </Caption>
      </CaptionContainer>
    </Container>
  );
}

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    userName: PropTypes.string.isRequired,
  }),
  caption: PropTypes.string,
  file: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  commentNumber: PropTypes.number.isRequired,
};
export default Photo;
