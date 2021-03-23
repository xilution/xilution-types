import { IPipeline, IPipelineDetails } from "./shared";
import { ICloudProvider } from "../cloud-provider";

export interface IGazellePipeline extends IPipeline {
  cloudProviderId: string;
}

export interface IGazellePipelineDetails extends IPipelineDetails {
  cloudProvider: ICloudProvider;
  cloudProviderId: string;
  gazellePipelineId: string;
}
