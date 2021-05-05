import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setContext } from "@apollo/client/link/context";
// Apollo Client에서 사용가능한 변수 생성
export const isLogginedVar = makeVar("false");

// Request에서 매번 사용하기 위해서 변수로 저장
export const tokenVar = makeVar("");

// AsyncStorage에 Token을 저장한다.
export const loggedInUser = async (token) => {
  // token을 문자열화 한다.

  // // 토큰을 해당 key값으로 value(token)를 집어넣는다.
  // await AsyncStorage.setItem('@token', JSON.stringify(token));

  // 다수의 속성을 집어 넣고자 하면 다음과 같이 작성한다.
  await AsyncStorage.multiSet([
    ["token", JSON.stringify(token)],
    ["loggedIn", JSON.stringify("yes")],
  ]);

  // Loggined 상태로 만든다.
  isLogginedVar(true);
  // Token Variable을 설정한다.
  tokenVar(token);
};
export const logoutUser = async () => {
  // Token 값을 삭제한다.
  await AsyncStorage.removeItem("token");
  // 로그인 상태를 해제한다.
  isLogginedVar(false);
  // ReactNative에 저장된 token값을 null로 바꾼다.
  tokenVar(null);
};

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: tokenVar(),
    },
  };
});

// Http에 Variable을 링크한다.
const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
export default client;
