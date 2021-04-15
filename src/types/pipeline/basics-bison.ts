import { IPipeline, IPipelineDetails } from "./shared";

export interface IBisonPipeline extends IPipeline {
  pipelinePrototype: {
    id: string;
    version: string;
  };
  parameters: {
    [name: string]: string;
  };
}

export interface IBisonPipelineDetails extends IPipelineDetails {
  pipelinePrototype: {
    id: string;
    version: string;
  };
  parameters: {
    [name: string]: string;
  };
}
