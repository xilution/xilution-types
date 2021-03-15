import { ICloudConfig, IGit, IPipeline, IPipelineDetails, IStage, IStageDetails } from "./shared";

export interface ICoyoteStage extends IStage {
  siteUrl?: string;
}

export interface ICoyotePipeline extends IPipeline {
  kangarooPipelineId: string;
  swanPipelineId: string;
  branch: string;
  stages: ICoyoteStage[];
}

export interface ICoyoteStageDetails extends IStageDetails {
  siteUrl?: string;
}

export interface ICoyotePipelineDetails extends IPipelineDetails {
  branch: string;
  git: IGit;
  stages: ICoyoteStageDetails[];
  cloudConfig: ICloudConfig;
  kangarooPipelineId: string;
  swanPipelineId: string;
  coyotePipelineId: string;
}
