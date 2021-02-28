import { IGitHub, IPipeline, IStage, IStageDetails, IStatus } from "./shared";

export interface IFoxPipeline extends IPipeline {
  gazellePipelineId: string;
  source: string;
  branch: string;
  stages: IStage[];
  organizationId: string;
  status?: IStatus;
}

export interface IFoxPipelineDetails {
  provider: string;
  accountId: string;
  region: string;
  name: string;
  branch: string;
  github: IGitHub;
  stages: IStageDetails[];
  foxPipelineId?: string;
  gazellePipelineId?: string;
  productCode: string;
  pipelineType: string;
}
