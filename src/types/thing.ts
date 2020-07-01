import {IAPILink} from "./api";

export interface IThing {
  "@type"?: string;
  id?: string;
  owningUserId?: string;
  links?: IAPILink[];
  [key: string]: any;
}
