import { IThing } from "./thing";

export interface IUser extends IThing {
  firstName: string;
  lastName: string;
}
