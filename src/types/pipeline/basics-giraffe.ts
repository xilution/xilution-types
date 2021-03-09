import { ICloudConfig, IPipeline, IPipelineDetails } from "./shared";

export interface IGiraffePipeline extends IPipeline {
  gazellePipelineId: string;
  organizationId: string;
}

export interface IGiraffePipelineDetails extends IPipelineDetails {
  cloudConfig: ICloudConfig;
  gazellePipelineId: string;
  giraffePipelineId: string;
}
