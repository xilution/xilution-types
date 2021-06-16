import { IThing } from "./thing";
import { ITimeConfiguration } from "./time";
import { IAdditionalProperties } from "./shared";

export enum CapabilityTypes {
  EQUALS = "equal",
  LESS_THAN_OR_EQUAL_TO = "less_than_or_equal_to",
}

export interface ICapability {
  name: string;
  value: number | string;
  eval: CapabilityTypes;
}

export interface IReservableAsset extends IThing {
  assetUri: string;
  timezone: string;
  duration: number;
  available: ITimeConfiguration[];
  unavailable: ITimeConfiguration[];
  capabilities: ICapability[];
  additionalProperties?: IAdditionalProperties;
  organizationId: string;
}
