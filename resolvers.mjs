export const resolvers = {
    Query: {
        checkApiStatus:()=>{
            return {status:'the api is working correctly'}
        }
    },

    Mutation :{
        TestMutations : async ()=>{
            return {
                status: 'mutations are working'
            }
        }
    }
}