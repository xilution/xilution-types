import { ICloudConfig, IPipeline, IPipelineDetails } from "./shared";

export interface IGiraffePipeline extends IPipeline {
  gazellePipelineId: string;
  loadBalancerUrl?: string;
}

export interface IGiraffePipelineDetails extends IPipelineDetails {
  cloudConfig: ICloudConfig;
  gazellePipelineId: string;
  giraffePipelineId: string;
  loadBalancerUrl?: string;
}
