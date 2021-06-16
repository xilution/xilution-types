import { IThing } from "./thing";

export interface IAsset extends IThing {
  name: string;
  description?: string;
  reservableAssetUri?: string;
  additionalProperties?: any;
  locationId: string;
}
