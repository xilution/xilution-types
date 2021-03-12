import {
  ICloudConfig,
  IGitHub,
  IPipeline,
  IPipelineDetails,
  IStage,
  IStageDetails,
} from "./shared";

export interface IFoxStage extends IStage {
  apiBaseUrl?: string;
}

export interface IFoxPipeline extends IPipeline {
  gazellePipelineId: string;
  source: string;
  branch: string;
  stages: IFoxStage[];
}

export interface IFoxStageDetails extends IStageDetails {
  apiBaseUrl?: string;
}

export interface IFoxPipelineDetails extends IPipelineDetails {
  branch: string;
  github: IGitHub;
  stages: IFoxStageDetails[];
  cloudConfig: ICloudConfig;
  gazellePipelineId: string;
  foxPipelineId: string;
}
