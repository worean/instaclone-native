import { gql, useQuery } from "@apollo/client";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import ScreenLayout from "../components/ScreenLayout";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragment";

// Query는 차차 수정이 필요한 내용
const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        userName
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export default function Feed({ navigation }) {
  const { data, loading } = useQuery(FEED_QUERY);
  console.log(data);

  // 실제 Photo를 그려주는 함수
  const renderPhoto = ({ item }) => {
    return (
      <View>
        <Text style={{ color: "white" }}>Loaded</Text>
      </View>
    );
  };
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={data?.seeFeed}
        keyExtractor={(photo) => "" + photo.id}
        renderItem={renderPhoto}
      />
      <Text style={{ color: "white" }}>Loaded</Text>
    </ScreenLayout>
  );
}
