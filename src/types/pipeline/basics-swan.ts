import { IGit, IPipeline, IPipelineDetails } from "./shared";

export interface ISwanPipeline extends IPipeline {
  accountId: string;
  repo: string;
}

export interface ISwanPipelineDetails extends IPipelineDetails {
  git: IGit;
  swanPipelineId: string;
}
