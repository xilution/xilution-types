import { IThing } from "../thing";
import { ILink } from "../link";

export interface IStage {
  name: string;
  links?: ILink[];
}

export interface IPipeline extends IThing {
  name: string;
  pipelineType?: string;
  organizationId: string;
  status?: IStatus;
}

export interface IPipelineDetails {
  name: string;
  productCode: string;
  productId: string;
  pipelineType?: string;
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
  eventType: string;
  parameters: {
    [name: string]: string | boolean;
  };
}

export interface IFetchPipelineEventsParameters {
  organizationId: string;
  pipelineId: string;
  pageNumber: number;
  pageSize: number;
}

export interface IPipelineEventParameters {
  organizationId: string;
  pipelineId: string;
  eventId: string;
}

