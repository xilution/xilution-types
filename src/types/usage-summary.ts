import { IUsage } from "./usage";

export interface IUsageSummary {
  organizationId: string;
  start: string;
  end: string;
  products: IUsage[];
}
