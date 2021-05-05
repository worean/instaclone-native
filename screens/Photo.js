import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import PropTypes from 'prop-types'


const Container = styled.View``;
const Header = styled.View``;
const UserAvatar = styled.Image``;
const Username = styled.Text``;
const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Caption = styled.View``;
const CaptionText = styled.Text``;
const Likes = styled.Text``;




function Photo({navigation, id, user, avatar, caption, file, isLiked, likes, commentNumber}) {
  return (
    <Container>
      <Header>
        <UserAvatar/>
        <Username>{Username}</Username>
      </Header>
      <File/>
      <Actions>
        <Action/>
        <Action/>
      </Actions>
      <Likes>{photo.Likes}</Likes>
      <Caption>
        <Username></Username>
        <CaptionText>{photo.caption}</CaptionText>
      </Caption>
    </Container>
  );
}

Photo.propTypes = {
  id:PropTypes.number.isRequired,
  user:PropTypes.shape({
    avatar:PropTypes.string,
    userName : PropTypes.string.isRequired,
  }),
  caption:PropTypes.string,
  file:PropTypes.string.isRequired,
  isLiked:PropTypes.bool.isRequired,
  likes:PropTypes.number.isRequired,
  commentNumber:PropTypes.number.isRequired,
};
export default Photo;