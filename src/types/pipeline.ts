import { IThing } from "./thing";
import { ILink } from "./link";

export interface IPipeline extends IThing {
  name: string;
  pipelineType: string;
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
  name?: string;
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
  logs: IPipelineExecutionLog[];
}
