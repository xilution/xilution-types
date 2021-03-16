import { IThing } from "../thing";
import { ILink } from "../link";

export interface IStage {
  name: string;
  links?: ILink[];
}

export interface IPipeline extends IThing {
  name: string;
  pipelineType: string;
  organizationId: string;
  status?: IStatus;
}

export interface IPipelineDetails {
  name: string;
  productCode: string;
  productId: string;
  pipelineType: string;
  pipelineId: string;
}

export interface IStatus {
  continuousIntegrationStatus?: {
    latestDownExecutionStatus?: string;
    latestUpExecutionStatus?: string;
  };
  infrastructureStatus?: string;
}

export interface IExtendedPipeline extends IPipeline {
  status?: IStatus;
}

export interface IActionDetails {
  name?: string;
  status?: string;
  message?: string;
  startTime?: string;
  lastUpdateTime?: string;
  links?: ILink[];
}

export interface IStageDetails {
  name: string;
  actions?: IActionDetails[];
  status?: string;
}

export interface IPipelineExecutionDetails {
  pipelineExecutionId?: string;
  name?: string;
  stages?: IStageDetails[];
  status?: string;
}

export interface IPipelineExecutionSummary {
  pipelineExecutionId?: string;
  startTime?: string;
  lastUpdateTime?: string;
  status?: string;
  message?: string;
  links?: ILink[];
  pipelineDetailsUrl?: string;
}

export interface IPipelineExecutionHistory {
  pipelineName: string;
  summaries: IPipelineExecutionSummary[];
}

export interface IPipelineExecutionLog {
  timestamp: string;
  message: string;
}

export interface IPipelineExecutionLogs {
  pipelineName: string;
  pipelineStageName: string;
  pipelineActionName: string;
  logs: IPipelineExecutionLog[];
}

export interface IActionExecution {
  status?: string;
  name?: string;
  message?: string;
  startTime?: string;
  lastUpdateTime?: string;
  links?: ILink[];
}

export interface IStageExecution {
  name?: string;
  status?: string;
  actions?: IActionExecution[];
}

export interface IPipelineExecution {
  name?: string;
  status?: string;
  stages?: IStageExecution[];
}

export interface IGit {
  provider: string;
  accountId: string;
  repo: string;
}

export interface IGitHub {
  owner: string;
  repo: string;
}

export interface ICloudConfig {
  accountId: string;
  provider: string;
  region: string;
}

export interface IPipelineParameters {
  organizationId: string;
  pipelineId: string;
}

export interface IFetchPipelinesParameters {
  organizationId: string;
  pageNumber: number;
  pageSize: number;
  name?: string;
}

export interface IFetchPipelineExecutionsParameters {
  organizationId: string;
  pipelineId: string;
}

export interface IPipelineExecutionParameters {
  organizationId: string;
  pipelineId: string;
  executionId: string;
}

export interface IPipelineExecutionLogsParameters {
  organizationId: string;
  pipelineId: string;
  executionId: string;
  stageName: string;
  actionName: string;
}

export interface IFetchPipelinesResponse<T extends IPipeline> {
  content: T[];
  firstPage: boolean;
  lastPage: boolean;
  totalPages: number;
  id: ILink;
  links: ILink[];
}

export interface IMessage {
  message: string;
}
