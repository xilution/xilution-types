import { IPipeline, IPipelineDetails, IStage, IStageDetails } from "./shared";
import { IGitRepo } from "../git-repo";
import { ICoyoteStageDetails } from "./content-delivery-coyote";
import { ICloudProvider } from "../cloud-provider";
import { IGiraffePipeline } from "./basics-giraffe";
import { IGazellePipeline } from "./basics-gazelle";
import { IGitAccount } from "../git-account";

export interface IPenguinStage extends IStage {
  siteUrl?: string;
}

export interface IPenguinPipeline extends IPipeline {
  giraffePipelineId: string;
  gitRepoId: string;
  branch: string;
  stages: IPenguinStage[];
}

export interface IPenguinStageDetails extends IStageDetails {
  siteUrl?: string;
}

export interface IPenguinPipelineDetails extends IPipelineDetails {
  branch: string;
  stages: ICoyoteStageDetails[];
  cloudProvider: ICloudProvider;
  cloudProviderId: string;
  gazellePipelineId: string;
  gazellePipeline: IGazellePipeline;
  giraffePipelineId: string;
  giraffePipeline: IGiraffePipeline;
  gitRepo: IGitRepo;
  gitRepoId: string;
  gitAccount: IGitAccount;
  gitAccountId: string;
  domain?: string;
  penguinPipelineId: string;
}
