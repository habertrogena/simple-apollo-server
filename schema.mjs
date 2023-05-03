 
 import gql from 'graphql-tag';


export  const typeDefs = gql`
type Query {
    checkApiStatus:ApiStatus
}

type Mutation {
    TestMutations( input:String):Test
}

type ApiStatus {
    status: String
}

type Test {
    status: String
}

`