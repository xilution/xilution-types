import {
  ICloudConfig,
  IGitHub,
  IPipeline,
  IPipelineDetails,
  IStage,
  IStageDetails,
  IStatus,
} from "./shared";

export interface IPenguinStage extends IStage {
  siteUrl?: string;
}

export interface IPenguinPipeline extends IPipeline {
  source: string;
  branch: string;
  stages: IPenguinStage[];
  giraffePipelineId: string;
  status?: IStatus;
}

export interface IPenguinStageDetails extends IStageDetails {
  siteUrl?: string;
}

export interface IPenguinPipelineDetails extends IPipelineDetails {
  branch: string;
  github: IGitHub;
  stages: IPenguinStageDetails[];
  cloudConfig: ICloudConfig;
  giraffePipelineId: string;
  penguinPipelineId: string;
}
