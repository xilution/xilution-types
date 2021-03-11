import {
  ICloudConfig,
  IGitHub,
  IPipeline,
  IPipelineDetails,
  IStage,
  IStageDetails,
  IStatus,
} from "./shared";

export interface ICoyoteStage extends IStage {
  siteUrl?: string;
}

export interface ICoyotePipeline extends IPipeline {
  provider: string;
  accountId: string;
  region: string;
  source: string;
  branch: string;
  stages: ICoyoteStage[];
  status?: IStatus;
}

export interface ICoyoteStageDetails extends IStageDetails {
  siteUrl?: string;
}

export interface ICoyotePipelineDetails extends IPipelineDetails {
  branch: string;
  github: IGitHub;
  stages: ICoyoteStageDetails[];
  cloudConfig: ICloudConfig;
  coyotePipelineId: string;
}
