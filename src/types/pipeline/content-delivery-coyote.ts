import {
  ICloudConfig,
  IGitHub,
  IPipeline,
  IPipelineDetails,
  IStage,
  IStageDetails,
} from "./shared";

export interface ICoyotePipeline extends IPipeline {
  provider: string;
  accountId: string;
  region: string;
  source: string;
  branch: string;
  stages: IStage[];
  organizationId: string;
}

export interface ICoyotePipelineDetails extends IPipelineDetails {
  branch: string;
  github: IGitHub;
  stages: IStageDetails[];
  cloudConfig: ICloudConfig;
  gazellePipelineId?: string;
  coyotePipelineId?: string;
}
