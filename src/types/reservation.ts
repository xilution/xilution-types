import { IThing } from "./thing";
import { IDateRange } from "./time";

export interface IDesiredCapability {
  name: string;
  value: number | string;
}

export interface IReservation extends IThing {
  reservableAssetId: string;
  dateRange: IDateRange;
  desiredCapabilities: IDesiredCapability[];
  customerUri: string;
  confirmed: boolean;
  comments?: string;
  partySize: number;
  additionalProperties?: any;
}
