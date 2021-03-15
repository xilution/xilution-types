import { ICloudConfig, IGit, IPipeline, IPipelineDetails, IStage, IStageDetails } from "./shared";

export interface IPenguinStage extends IStage {
  siteUrl?: string;
}

export interface IPenguinPipeline extends IPipeline {
  giraffePipelineId: string;
  swanPipelineId: string;
  branch: string;
  stages: IPenguinStage[];
}

export interface IPenguinStageDetails extends IStageDetails {
  siteUrl?: string;
}

export interface IPenguinPipelineDetails extends IPipelineDetails {
  branch: string;
  git: IGit;
  stages: IPenguinStageDetails[];
  cloudConfig: ICloudConfig;
  giraffePipelineId: string;
  penguinPipelineId: string;
}
