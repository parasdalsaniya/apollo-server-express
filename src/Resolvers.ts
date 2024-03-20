/* eslint-disable @typescript-eslint/no-explicit-any */
import people from "./dataset";

const Resolvers = {
    Query: {
        getAllPeople: () => people,

        getPerson: (_: any, args: any, a: any, b: any, c:any, d: any, e: any) => {
            console.log("-----------",_);
            console.log({ _, args, a, b, c, d, e})



            return people.find((person) => person.id === args.id);
        },
    },
    Mutation: {
        addPerson: (_: any, args: any) => {

            const newPerson = {
                id: people.length + 1,
                name: args.name,
            };

            people.push(newPerson);
            return newPerson;
        },
    },
};

export default Resolvers;
