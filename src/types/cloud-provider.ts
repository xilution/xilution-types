import { IThing } from "./thing";

export interface ICloudProvider extends IThing {
  "@type": "cloud-provider";
  name: string;
  provider: string;
  accountId: string;
  region: string;
}
