/*****************************************************************************************/
// Creamos los resolvers de este Objeto y exportamos //
/*****************************************************************************************/
export default {
  Query: {
    hello() {
      return "Welcome to GraphQL API";
    },
    greet: (_, { name }) => {
      return `Hello dear ${name}`;
    }
  }
};