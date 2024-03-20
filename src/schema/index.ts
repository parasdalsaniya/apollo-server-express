import { gql } from 'apollo-server-express'
import { ProductTypes, ProductQuery, ProductMutation, ProductResolvers } from './product'

// remember we only use gql in this file. types in other files are just simple strings
export const typeDefs = gql`
     type Query
     type Mutation
     ${ProductTypes}
`
export const resolvers = {
   Query: {
       ... ProductQuery,
   },
   Mutation: {
       ... ProductMutation,
   },
   Product: ProductResolvers,
}
