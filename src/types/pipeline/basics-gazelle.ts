import { IPipeline, IPipelineDetails } from "./shared";
import { ICloudProvider } from "../cloud-provider";

export interface IGazellePipeline extends IPipeline {
  kangarooPipelineId: string;
}

export interface IGazellePipelineDetails extends IPipelineDetails {
  cloudProvider: ICloudProvider;
  kangarooPipelineId: string;
  gazellePipelineId: string;
}
