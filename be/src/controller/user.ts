import { UserModel } from "../../models/User.model";
interface User {
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
}
export const addUser = async (req: User, res: Express.Response) => {
  try {
    const user = UserModel.create();
  } catch (err) {
    console.error(err);
  }
};
