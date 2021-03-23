import { IPipeline, IPipelineDetails, IStage, IStageDetails } from "./shared";
import { IGitRepo } from "../git-repo";
import { ICloudProvider } from "../cloud-provider";

export interface ICoyoteStage extends IStage {
  siteUrl?: string;
}

export interface ICoyotePipeline extends IPipeline {
  cloudProviderId: string;
  gitRepoId: string;
  branch: string;
  stages: ICoyoteStage[];
}

export interface ICoyoteStageDetails extends IStageDetails {
  siteUrl?: string;
}

export interface ICoyotePipelineDetails extends IPipelineDetails {
  branch: string;
  stages: ICoyoteStageDetails[];
  cloudProvider: ICloudProvider;
  cloudProviderId: string;
  gitRepo: IGitRepo;
  gitRepoId: string;
  coyotePipelineId: string;
}
