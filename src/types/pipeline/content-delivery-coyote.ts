import { IPipeline, IPipelineDetails, IStage, IStageDetails } from "./shared";
import { IGitRepo } from "../git-repo";
import { ICloudProvider } from "../cloud-provider";

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
  gitRepo: IGitRepo;
  stages: ICoyoteStageDetails[];
  cloudProvider: ICloudProvider;
  kangarooPipelineId: string;
  swanPipelineId: string;
  coyotePipelineId: string;
}
