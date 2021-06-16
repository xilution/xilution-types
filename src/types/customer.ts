import { IThing } from "./thing";

export interface ICustomer extends IThing {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  organizationId: string;
}
