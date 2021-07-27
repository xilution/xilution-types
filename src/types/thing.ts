import { ILink } from "./link";
import {IAccessPolicy} from "./access-policy";

export interface IThing {
  "@type"?: string;
  id?: string;
  owningUserId?: string;
  links?: ILink[];
  createdAt?: string;
  modifiedAt?: string;
  accessPolicy?: IAccessPolicy;
  [key: string]: any;
}
