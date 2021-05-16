import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import ScreenLayout from "../components/ScreenLayout";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragment";
import Photo from './Photo'

// Query는 차차 수정이 필요한 내용
const FEED_QUERY = gql`
  query seeFeed ($offset:Int!) {
    seeFeed(offset:$offset) {
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

  // 현재 SeeFeed를 통해서 보는 목록의 위치를 설정
  const [offset, SetOffset] = useState(0);

  // Query 동작을 설정한다.
  const { data, loading, refetch, fetchMore } = useQuery(FEED_QUERY, {
    variables:{
      offset: 0 // 초기 Offset은 0 이다.
    }
  });

  // Refreshing 여부를 설정한다. 초기상태 = False
  const [refreshing, SetRefreshing] = useState(false);

  // 위로 스크롤 했을 때, 새로고침을 동작한다.
  const refresh = async () => {
    SetRefreshing(true);
    await refetch();
    SetRefreshing(false);
  }

  // 실제 Photo를 그려주는 함수
  const renderPhoto = ({ item: photo }) => {
    return (
      <Photo {...item} />
    );
  };
  return (
    <ScreenLayout loading={loading}>
      <FlatList   // Rendering 최적화 ScrollView
        onEndReachedThreshold={1}
        onEndReached={() => fetchMore({
          variable: {
            offset: data?seeFeed?.length : 0, // 현재 가져온 Feed의 갯수가 offset이 된다.
            limit: 10                           // 정해진 offset에서 10개만 추가로 가져온다.
          }
        })}
        refreshing={refreshing}
        onRefresh={refresh(0)}
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        data={data?.seeFeed}
        keyExtractor={(photo) => "" + photo.id}
        renderItem={renderPhoto}
      />
      <Text style={{ color: "white" }}>Loaded</Text>
    </ScreenLayout>
  );
}
