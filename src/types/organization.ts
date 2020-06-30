import { IThing } from "./thing";

export interface IOrganization extends IThing {
  id: string;
  name: string;
  domain?: string;
  iamClientId?: string;
}
