import { ICloudConfig, IGitHub, IPipeline, IStage, IStageDetails } from "./shared";

export interface ICoyotePipeline extends IPipeline {
  provider: string;
  accountId: string;
  region: string;
  source: string;
  branch: string;
  stages: IStage[];
  organizationId: string;
}

export interface ICoyotePipelineDetails {
  branch: string;
  name: string;
  github: IGitHub;
  stages: IStageDetails[];
  coyotePipelineId?: string;
  productCode: string;
  cloudConfig: ICloudConfig;
  pipelineType: string;
}
