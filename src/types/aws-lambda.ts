import { IUser } from "./user";
import { IOrganization } from "./organization";
import { IClient } from "./client";

export interface ILambdaContext {
  productCode: string;
  operation: string;
  environment: string;
  user: IUser & { id: string };
  organization: IOrganization & { id: string };
  client: IClient & { id: string };
  indexOrganizationId: string;
}

export interface ILambdaEvent {
  context: ILambdaContext;
  body: any;
  parameters: any;
}

export interface IActionResponse {
  context: {
    location?: string;
  };
  payload?: any;
}
