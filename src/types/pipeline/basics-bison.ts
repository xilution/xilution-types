import {IPipeline, IPipelineDetails} from "./shared";

export interface IBisonPipeline extends IPipeline {
  stackPrototype: {
    id: string;
    version: string;
  };
  parameters: {
    [name: string]: string;
  };
}

export interface IBisonPipelineDetails extends IPipelineDetails {
  stackPrototype: {
    id: string;
    version: string;
  };
  parameters: {
    [name: string]: string;
  };
}
