import {IAPILink} from "./api";

export interface IThing {
  "@type"?: string;
  id?: string;
  owningUserId?: string;
  links?: IAPILink[];
  createdAt?: string;
  modifiedAt?: string;
  [key: string]: any;
}
