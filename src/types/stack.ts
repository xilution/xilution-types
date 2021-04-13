import { IThing } from "./thing";

export interface IStack extends IThing {
  "@type": "stack";
  name: string;
  organizationId: string;
  stackPrototype: {
    id: string;
    version: string;
  };
  parameters: {
    [name: string]: string;
  };
}
