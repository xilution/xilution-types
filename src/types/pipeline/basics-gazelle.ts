import { IPipeline } from "./shared";

export interface IGazellePipeline extends IPipeline {
  provider: string;
  accountId: string;
  region: string;
  organizationId: string;
}

export interface IGazellePipelineDetails {
  provider: string;
  name: string;
  accountId: string;
  region: string;
  pipelineType: string;
  gazellePipelineId?: string;
}
