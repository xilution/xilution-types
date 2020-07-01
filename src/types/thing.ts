import {IAPILink} from "./api";
import {ILink} from "./link";

export interface IThing {
  "@type"?: string;
  id?: string;
  owningUserId?: string;
  links?: ILink[] | IAPILink[];
  createdAt?: string;
  modifiedAt?: string;
  [key: string]: any;
}
