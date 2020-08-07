import { IThing } from "./thing";

export interface IOrganization extends IThing {
  "@type": "organization";
  name: string;
  active?: boolean;
  logo?: string;
  domain?: string;
  authClientId?: string;
  organizationId?: string;
}
