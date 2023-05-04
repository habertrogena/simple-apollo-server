export const resolvers = {
    Query: {
        checkApiStatus:(parent,args,context,info)=>{
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