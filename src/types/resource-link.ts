import { ILink } from "./link";

export interface IResourceLink {
  id: string;
  productId: string;
  stage?: string;
  link: ILink;
}
