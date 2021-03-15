import {
  ICloudConfig,
  IGitHub,
  IPipeline,
  IPipelineDetails,
  IStage,
  IStageDetails,
} from "./shared";

export interface ICoyoteStage extends IStage {
  siteUrl?: string;
}

export interface ICoyotePipeline extends IPipeline {
  kangarooPipelineId: string;
  source: string;
  branch: string;
  stages: ICoyoteStage[];
}

export interface ICoyoteStageDetails extends IStageDetails {
  siteUrl?: string;
}

export interface ICoyotePipelineDetails extends IPipelineDetails {
  branch: string;
  github: IGitHub;
  stages: ICoyoteStageDetails[];
  cloudConfig: ICloudConfig;
  kangarooPipelineId: string;
  coyotePipelineId: string;
}
