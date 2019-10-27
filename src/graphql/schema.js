/*****************************************************************************************/
// Añadimos los Imports //
/*****************************************************************************************/
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import { makeExecutableSchema } from "graphql-tools";
import path from "path";
import "graphql-import-node";
import schema from "./schema.gql";

/*****************************************************************************************/
// Obtenemos el array de todos los typeDefs (*.gql) y hacemos un MergeTypes //
/*****************************************************************************************/
const typeDefsArray = fileLoader(path.join(__dirname, "./typeDefs"), {
  extensions: [".gql"]
});
typeDefsArray.push(schema);
const typeDefs = mergeTypes(typeDefsArray);

/*****************************************************************************************/
// Obtenemos el array de todos los resolvers (*.js) y hacemos un MergeResolvers //
/*****************************************************************************************/
const resolversArray = fileLoader(path.join(__dirname, "./resolvers"), {
  extensions: [".js"]
});
const resolvers = mergeResolvers(resolversArray);

/*****************************************************************************************/
// Creamos el schema de GraphQL y exportamos //
/*****************************************************************************************/
export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
