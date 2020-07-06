import { IThing } from "./thing";

export interface IUser extends IThing {
  "@type": "user";
  active: boolean;
  email: string;
  firstName: string;
  lastName: string;
  organizationId: string;
  owningUserId: string;
  username: string;
}
