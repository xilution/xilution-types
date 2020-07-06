import { IThing } from "./thing";

export interface IClient extends IThing {
  "@type": "client";
  name: string;
  active: boolean;
  clientUserId: string;
  grants: string[];
  organizationId: string;
  owningUserId: string;
  redirectUris: string[];
}
