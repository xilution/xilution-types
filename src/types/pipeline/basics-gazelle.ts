import { ICloudConfig, IPipeline, IPipelineDetails, IStatus } from "./shared";

export interface IGazellePipeline extends IPipeline {
  provider: string;
  accountId: string;
  region: string;
  status?: IStatus;
}

export interface IGazellePipelineDetails extends IPipelineDetails {
  cloudConfig: ICloudConfig;
  gazellePipelineId: string;
}
