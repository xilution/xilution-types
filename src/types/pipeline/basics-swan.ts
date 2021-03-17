import { IGit, IPipeline, IPipelineDetails } from "./shared";

export interface ISwanPipeline extends IPipeline {
  provider: string;
  accountId: string;
}

export interface ISwanPipelineDetails extends IPipelineDetails {
  git: IGit;
  swanPipelineId: string;
}
