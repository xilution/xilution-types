import { ICloudConfig, IPipeline, IPipelineDetails } from "./shared";

export interface IGazellePipeline extends IPipeline {
  provider: string;
  accountId: string;
  region: string;
  organizationId: string;
}

export interface IGazellePipelineDetails extends IPipelineDetails {
  cloudConfig: ICloudConfig;
  gazellePipelineId?: string;
}
