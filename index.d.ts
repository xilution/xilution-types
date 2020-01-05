export interface LambdaEvent {
  context: Context;
  body: any;
  parameters: any;
}

export interface Context {
  productCode: string;
  operation: string;
  environment: string;
  organization: Organization;
}

export interface Organization {
  '@type': string;
  id: string;
}
