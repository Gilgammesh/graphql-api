/*****************************************************************************************/
// Añadimos los Imports de los Modelos establecidos //
/*****************************************************************************************/
import User from "../../database/models/User";

/*****************************************************************************************/
// Creamos los resolvers de este Objeto y exportamos //
/*****************************************************************************************/
export default {
  Query: {
    getUsers: async () => {
      const users = await User.find();
      return users;
    }
  },
  Mutation: {
    createUser: async (_, { input }) => {
      try {
        const newUser = new User(input);
        await newUser.save();
        return newUser;
      } catch (err) {
        return err.toString();
      }
    },
    deleteUser: async (_, { _id }) => {
      try {
        const delUser = await User.findByIdAndDelete(_id);
        return delUser;
      } catch (err) {
        return err.toString();
      }
    },
    updateUser: async (_, { _id, input }) => {
      try {
        const updUser = await User.findByIdAndUpdate(_id, input, { new: true });
        return updUser;
      } catch (err) {
        return err.toString();
      }
    }
  }
};