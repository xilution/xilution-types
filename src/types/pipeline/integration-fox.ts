import {
  ICloudConfig,
  IGitHub,
  IPipeline,
  IPipelineDetails,
  IStage,
  IStageDetails,
  IStatus,
} from "./shared";

export interface IFoxPipeline extends IPipeline {
  gazellePipelineId: string;
  source: string;
  branch: string;
  stages: IStage[];
  organizationId: string;
  status?: IStatus;
}

export interface IFoxPipelineDetails extends IPipelineDetails {
  branch: string;
  github: IGitHub;
  stages: IStageDetails[];
  cloudConfig: ICloudConfig;
  gazellePipelineId?: string;
  foxPipelineId?: string;
}
