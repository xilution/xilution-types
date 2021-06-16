import { IThing } from "./thing";
import { IAddress } from "./address";
import { ITimeConfiguration } from "./time";
import { IAdditionalProperties } from "./shared";

export interface ILocation extends IThing {
  name: string;
  open: ITimeConfiguration[];
  closed: ITimeConfiguration[];
  timezone: string;
  phoneNumber: string;
  address: IAddress;
  description?: string;
  additionalProperties?: IAdditionalProperties;
  organizationId: string;
}
