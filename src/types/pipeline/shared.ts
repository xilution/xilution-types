import { IThing } from "../thing";
import { ILink } from "../link";

export type IntegrationStatus =
  | string
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "CREATE_COMPLETE"
  | "ROLLBACK_IN_PROGRESS"
  | "ROLLBACK_FAILED"
  | "ROLLBACK_COMPLETE"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED"
  | "DELETE_COMPLETE"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS"
  | "UPDATE_COMPLETE"
  | "UPDATE_ROLLBACK_IN_PROGRESS"
  | "UPDATE_ROLLBACK_FAILED"
  | "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS"
  | "UPDATE_ROLLBACK_COMPLETE"
  | "REVIEW_IN_PROGRESS"
  | "IMPORT_IN_PROGRESS"
  | "IMPORT_COMPLETE"
  | "IMPORT_ROLLBACK_IN_PROGRESS"
  | "IMPORT_ROLLBACK_FAILED"
  | "IMPORT_ROLLBACK_COMPLETE"
  | "NOT_FOUND"
  | "UNKNOWN";

export type ContinuousIntegrationStatus =
  | string
  | "SUCCEEDED"
  | "IN_PROGRESS"
  | "FAILED"
  | "STOPPED"
  | "STOPPING"
  | "SUPERSEDED"
  | "NOT_EXECUTED_YET"
  | "NOT_FOUND"
  | "UNKNOWN";

export type PipelineEventType = string | "PROVISION" | "REPROVISION" | "DEPROVISION" | "RUN_NOW";

export type PipelineType = string | "AWS_SMALL";

export interface IStage {
  name: string;
  links?: ILink[];
}

export interface IPipeline extends IThing {
  name: string;
  pipelineType?: PipelineType;
  organizationId: string;
  status?: IPipelineStatus;
}

export interface IPipelineDetails {
  name: string;
  productCode: string;
  productId: string;
  pipelineType?: PipelineType;
  pipelineId: string;
}

export interface IPipelineStatus {
  continuousIntegrationStatus?: {
    latestDownExecutionStatus?: ContinuousIntegrationStatus;
    latestUpExecutionStatus?: ContinuousIntegrationStatus;
  };
  infrastructureStatus?: IntegrationStatus;
}

export interface IExtendedPipeline extends IPipeline {
  status?: IPipelineStatus;
}

export interface IActionDetails {
  name?: string;
  status?: ContinuousIntegrationStatus;
  message?: string;
  startTime?: string;
  lastUpdateTime?: string;
  links?: ILink[];
}

export interface IStageDetails {
  name: string;
  actions?: IActionDetails[];
  status?: ContinuousIntegrationStatus;
}

export interface IPipelineExecutionDetails {
  pipelineExecutionId?: string;
  name?: string;
  stages?: IStageDetails[];
  status?: ContinuousIntegrationStatus;
}

export interface IPipelineExecutionSummary {
  pipelineExecutionId?: string;
  startTime?: string;
  lastUpdateTime?: string;
  status?: ContinuousIntegrationStatus;
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
  status?: ContinuousIntegrationStatus;
  name?: string;
  message?: string;
  startTime?: string;
  lastUpdateTime?: string;
  links?: ILink[];
}

export interface IStageExecution {
  name?: string;
  status?: ContinuousIntegrationStatus;
  actions?: IActionExecution[];
}

export interface IPipelineExecution {
  name?: string;
  status?: ContinuousIntegrationStatus;
  stages?: IStageExecution[];
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

export interface IParameterDefinition {
  name: string;
  label: {
    default: string;
    [locale: string]: string;
  };
  helpText?: {
    default: string;
    [locale: string]: string;
  };
  type?: "text" | "number" | "select" | "textarea" | "checkbox";
  validation?: {
    functionName:
      | "VALIDATE_TEXT_FIELD"
      | "VALIDATE_UUID"
      | "VALIDATE_EMAIL_FIELD"
      | "VALIDATE_URL"
      | "VALIDATE_AGAINST_ALLOWED_VALUES"
      | "VALIDATE_DOMAIN";
    parameters: (string | string[] | number)[];
  };
  autoComplete?: string;
  readOnly?: boolean;
  placeholder?: {
    default: string;
    [locale: string]: string;
  };
  initialValue?: string;
  options?: {
    name: {
      default: string;
      [locale: string]: string;
    };
    value?: any;
    disabled?: boolean;
  }[];
  optionsRef?: {
    id: string;
    nameExpression: string;
    valueExpression: string;
  };
}

export interface IReference {
  id: string;
  uri: string;
  filterExpression: string;
  required?: boolean;
}

export interface IPipelinePrototype extends IThing {
  "@type": "pipeline-prototype";
  id: string;
  name: string;
  references?: IReference[];
  version: string;
  description: string;
  active: boolean;
  parameterDefinitions: IParameterDefinition[];
}

export interface IPipelineEvent extends IThing {
  "@type": "pipeline-event";
  pipelineId: string;
  organizationId: string;
  eventType: PipelineEventType;
  parameters?: {
    [name: string]: string | boolean;
  };
}

export interface IFetchPipelineEventsParameters {
  organizationId: string;
  pageNumber: number;
  pageSize: number;
}

export interface IPipelineEventParameters {
  organizationId: string;
  pipelineEventId: string;
}
