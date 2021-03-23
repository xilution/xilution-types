import { IPipeline, IPipelineDetails, IStage, IStageDetails } from "./shared";
import { IGitRepo } from "../git-repo";
import { ICloudProvider } from "../cloud-provider";
import { IGazellePipeline } from "./basics-gazelle";

export interface IFoxStage extends IStage {
  apiBaseUrl?: string;
}

export interface IFoxPipeline extends IPipeline {
  gazellePipelineId: string;
  gitRepoId: string;
  branch: string;
  stages: IFoxStage[];
}

export interface IFoxStageDetails extends IStageDetails {
  apiBaseUrl?: string;
}

export interface IFoxPipelineDetails extends IPipelineDetails {
  branch: string;
  stages: IFoxStageDetails[];
  gazellePipeline: IGazellePipeline;
  gazellePipelineId: string;
  cloudProvider: ICloudProvider;
  cloudProviderId: string;
  gitRepo: IGitRepo;
  gitRepoId: string;
  foxPipelineId: string;
}
