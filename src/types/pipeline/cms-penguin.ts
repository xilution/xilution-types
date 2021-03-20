import { IPipeline, IPipelineDetails, IStage, IStageDetails } from "./shared";
import { IGitRepo } from "../git-repo";
import { ICoyoteStageDetails } from "./content-delivery-coyote";
import { ICloudProvider } from "../cloud-provider";

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
  gitRepo: IGitRepo;
  stages: ICoyoteStageDetails[];
  cloudProvider: ICloudProvider;
  giraffePipelineId: string;
  swanPipelineId: string;
  penguinPipelineId: string;
}
