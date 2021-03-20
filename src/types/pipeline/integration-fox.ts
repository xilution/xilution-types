import { IPipeline, IPipelineDetails, IStage, IStageDetails } from "./shared";
import { IGitRepo } from "../git-repo";
import { ICloudProvider } from "../cloud-provider";

export interface IFoxStage extends IStage {
  apiBaseUrl?: string;
}

export interface IFoxPipeline extends IPipeline {
  gazellePipelineId: string;
  swanPipelineId: string;
  branch: string;
  stages: IFoxStage[];
}

export interface IFoxStageDetails extends IStageDetails {
  apiBaseUrl?: string;
}

export interface IFoxPipelineDetails extends IPipelineDetails {
  branch: string;
  gitRepo: IGitRepo;
  stages: IFoxStageDetails[];
  cloudProvider: ICloudProvider;
  gazellePipelineId: string;
  swanPipelineId: string;
  foxPipelineId: string;
}
