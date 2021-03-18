import { IThing } from "./thing";

export interface ICloudProvider extends IThing {
  "@type": "cloud-provider";
  provider: string;
  accountId: string;
  region: string;
}
