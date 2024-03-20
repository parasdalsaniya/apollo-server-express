import { gql } from "apollo-server-express"; //will create a schema
const Schema = gql`
    type Person {
        id: ID!
        name: String
    }

    type Query {
        getAllPeople: [Person]
        getPerson(id: Int): Person
    }

    type Mutation {
        addPerson(name: String): Person
    }
`;
export default Schema;
