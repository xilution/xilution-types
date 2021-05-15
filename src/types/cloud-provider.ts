import { IThing } from "./thing";

type CloudProviderStatus = "NOT_FOUND" | "ACTIVE";

export interface ICloudProvider extends IThing {
  "@type": "cloud-provider";
  name: string;
  provider: string;
  accountId: string;
  region: string;
  organizationId: string;
  status?: CloudProviderStatus;
}
