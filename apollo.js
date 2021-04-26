import {ApolloClient, InMemoryCache, makeVar} from "@apollo/client"

// Apollo Client에서 사용가능한 변수 생성
export const isLogginedVar = makeVar();

const client = new ApolloClient({
    uri:"http://127.0.0.1:4000/graphql",
    cache: new InMemoryCache()
})
export default client;