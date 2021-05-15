import { IThing } from "./thing";

export type CloudProviderEventType =
  | string
  | "CREATE_CLOUD_ACCOUNT"
  | "PRIME_CLOUD_ACCOUNT"
  | "DELETE_CLOUD_ACCOUNT";

export interface ICloudProviderEvent extends IThing {
  "@type": "cloud-provider-event";
  cloudProviderId: string;
  organizationId: string;
  eventType: CloudProviderEventType;
  parameters?: {
    [name: string]: string | boolean;
  };
}
