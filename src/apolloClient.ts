import { ApolloClient,InMemoryCache,HttpLink,ApolloLink } from '@apollo/client'
import {onError} from '@apollo/client/link/error'

const errorLink = onError(({graphQLErrors, networkError})=>{
    if(graphQLErrors){
        graphQLErrors.forEach(({message,locations,path})=>{
            console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        })
    }
    if(networkError){
        console.error(`[Network Error] : ${networkError}`)
    }
    // deprecated

    // if(!error) return

    // if(error.graphQLErrors.length > 0){
    //     error.graphQLErrors.forEach(({message,locations,path}:{message:any,locations:any,path:any})=>{
    //         console.error(
    //             `[GraphQL Error] : Message: ${message}, Locations: ${locations}, Path: ${path}`
    //         )
    //     })
    // }
    // if(error.networkError){
    //     console.error(`[Network Error]: ${error.networkError}`)
    // }

})

// this here is the entire client setup
const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
})

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
})

export default client