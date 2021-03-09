import {
  ICloudConfig,
  IGitHub,
  IPipeline,
  IPipelineDetails,
  IStage,
  IStageDetails,
} from "./shared";

export interface IPenguinPipeline extends IPipeline {
  source: string;
  branch: string;
  stages: IStage[];
  giraffePipelineId: string;
  organizationId: string;
}

export interface IPenguinPipelineDetails extends IPipelineDetails {
  branch: string;
  github: IGitHub;
  stages: IStageDetails[];
  cloudConfig: ICloudConfig;
  giraffePipelineId: string;
  penguinPipelineId: string;
}
