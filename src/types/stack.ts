import { IThing } from "./thing";

export interface IStack extends IThing {
  "@type": "stack";
  name: string;
  pipelineUris: string[];
}
