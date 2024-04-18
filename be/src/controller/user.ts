import { UserModel } from "../../models/User.model";
interface User {
  body: {
    _id: string;
    userName: string;
    email: number;
    phoneNumber: string;
    password: string;
    address: string;
    zipCode: number;
    cartId: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
// export interface TypedRequestBody<type> extends Express.Request {
//   body: type;
// // }
// // const requestBody: User = {
// //   name: "John Doe",
// //   age: 30,a
// // };
export const addUser = async (req: User, res: Express.Response) => {
  const { userName, email, phoneNumber } = req.body;

  try {
    console.log(userName);

    const user = UserModel.create();
  } catch (err) {
    console.error(err);
  }
};
