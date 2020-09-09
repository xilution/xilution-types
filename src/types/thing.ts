import { ILink } from "./link";

export interface IThing {
  "@type"?: string;
  id?: string;
  owningUserId?: string;
  links?: ILink[];
  createdAt?: string;
  modifiedAt?: string;
  [key: string]: any;
}
