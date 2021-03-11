import { ICloudConfig, IPipeline, IPipelineDetails, IStatus } from "./shared";

export interface IGiraffePipeline extends IPipeline {
  gazellePipelineId: string;
  status?: IStatus;
  loadBalancerUrl?: string;
}

export interface IGiraffePipelineDetails extends IPipelineDetails {
  cloudConfig: ICloudConfig;
  gazellePipelineId: string;
  giraffePipelineId: string;
  loadBalancerUrl?: string;
}
