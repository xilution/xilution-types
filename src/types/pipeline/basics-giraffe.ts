import { IPipeline, IPipelineDetails } from "./shared";
import { ICloudProvider } from "../cloud-provider";

export interface IGiraffePipeline extends IPipeline {
  gazellePipelineId: string;
  loadBalancerUrl?: string;
}

export interface IGiraffePipelineDetails extends IPipelineDetails {
  cloudProvider: ICloudProvider;
  gazellePipelineId: string;
  giraffePipelineId: string;
  loadBalancerUrl?: string;
}
