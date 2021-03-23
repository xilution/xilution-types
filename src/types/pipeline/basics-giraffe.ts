import { IPipeline, IPipelineDetails } from "./shared";
import { ICloudProvider } from "../cloud-provider";
import { IGazellePipeline } from "./basics-gazelle";

export interface IGiraffePipeline extends IPipeline {
  gazellePipelineId: string;
  loadBalancerUrl?: string;
}

export interface IGiraffePipelineDetails extends IPipelineDetails {
  cloudProvider: ICloudProvider;
  cloudProviderId: string;
  gazellePipeline: IGazellePipeline;
  gazellePipelineId: string;
  loadBalancerUrl?: string;
  giraffePipelineId: string;
}
