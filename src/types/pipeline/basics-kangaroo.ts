import { ICloudConfig, IPipeline, IPipelineDetails } from "./shared";

export interface IKangarooPipeline extends IPipeline {
  provider: string;
  accountId: string;
  region: string;
}

export interface IKangarooPipelineDetails extends IPipelineDetails {
  cloudConfig: ICloudConfig;
  kangarooPipelineId: string;
}
