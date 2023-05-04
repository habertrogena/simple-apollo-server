 
 import gql from 'graphql-tag';


export  const typeDefs = gql`
type Query {
    checkApiStatus:ApiStatus
}

type Mutation {
    createUser( input:UserInput):User
}

type ApiStatus {
    status: String
}

input  UserInput {
    firstName : String
    lastName: String
    email :String
    password: String
}

`