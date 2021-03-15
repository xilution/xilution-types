import { ICloudConfig, IPipeline, IPipelineDetails } from "./shared";

export interface IGazellePipeline extends IPipeline {
  kangarooPipelineId: string;
}

export interface IGazellePipelineDetails extends IPipelineDetails {
  cloudConfig: ICloudConfig;
  kangarooPipelineId: string;
  gazellePipelineId: string;
}
