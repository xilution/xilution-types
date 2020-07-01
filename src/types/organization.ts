import { IThing } from "./thing";

export interface IOrganization extends IThing {
  id: string;
  name: string;
  active?: boolean;
  logo?: string;
  domain?: string;
  iamClientId?: string;
  organizationId?: string;
}
