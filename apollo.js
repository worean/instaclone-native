import {ApolloClient, InMemoryCache, makeVar} from "@apollo/client"
import AsyncStorage from '@react-native-async-storage/async-storage';

// Apollo Client에서 사용가능한 변수 생성
export const isLogginedVar = makeVar("false");

// Request에서 매번 사용하기 위해서 변수로 저장
export const tokenVar = makeVar("");

// AsyncStorage에 Token을 저장한다.
export const loggedInUser = async (token) => {
    try {
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
    } catch (e) {
        // saving error
      }
}


const client = new ApolloClient({
    uri:"http://192.168.200.134:4000/graphql",
    cache: new InMemoryCache()
})
export default client; 