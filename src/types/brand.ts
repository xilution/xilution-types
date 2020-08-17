export interface IBrand {
  organizationId: string;
  name: string;
  logo?: string;
  authClientId?: string;
  url?: string;
  autoAuth?: boolean;
  showSignUp?: boolean;
  domain: string;
}
