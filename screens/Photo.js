import React, { useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import styled from "styled-components";
import PropTypes from 'prop-types'


const Container = styled.View``;
const Header = styled.View`
  padding:20px 10px;
  flex-direction: row;
  align-items:center;
`;
const UserAvatar = styled.Image`
  margin-right: 10px;
`;
const Username = styled.Text`
  color:white;
  font-weight:600;
`;
const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Caption = styled.View``;
const CaptionText = styled.Text``;
const Likes = styled.Text``;




function Photo({ id, user, caption, file, isLiked, likes }) {

  // Window에서 dimension을 가져온다.
  const { width, height } = useWindowDimensions();
  const [imageHeight, setImageHeight] = useState(height - 350);
  useEffect(() => {
    Image.getSize(file, (width, height) => {
      setImageHeight(height / 3);
    })
  }, [file]);
  return (
    <Container>
      <Header>
        <UserAvatar
          resizeMode="cover"
          source={{ uri: user.avatar }}
          style={{
            width: 50, height: 50, borderRadius: 25
          }}
        />
        <Username>{user.userName}</Username>
      </Header>
      <File
        resizeMode="cover"
        style={{
          width,                // Dimention에서 가져온다.
          height: height - 350, // 상세 조정 필요
        }} 
        source={{ uri: file }} />
      <Actions>
        <Action />
        <Action />
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