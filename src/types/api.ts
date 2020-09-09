import { ILink } from "./link";

export interface ISearchCriteria {
  criteria?: any;
  dynamodb?: any;
  "@type": string;
  owningUserId: string;
  id?: string;
}

export interface IFetchThingsResponse<T> {
  content: T[];
  firstPage: boolean;
  lastPage: boolean;
  totalPages: number;
  id: ILink;
  links: ILink[];
}
