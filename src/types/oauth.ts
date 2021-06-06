import { IClient } from "./client";
import { IUser } from "./user";
import { IOrganization } from "./organization";

export interface ITokenResponse {
  access_token: string;
  access_token_expires_at: string;
  refresh_token: string;
  refresh_token_expires_at: string;
  scope: string;
  client: IClient;
  user: IUser;
}

export interface IAuthenticateResponse {
  access_token: string;
  access_token_expires_at: string;
  scope: string;
  client: IClient;
  user: IUser;
  organization: IOrganization;
}

export interface IAuthorizeResponse {
  authorization_code: string;
  expires_at: string;
  redirect_uri: string;
  scope: string;
  client: IClient;
  user: IUser;
}
