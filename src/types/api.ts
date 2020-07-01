export interface IAPILink {
  rel: string;
  href: string;
}

export interface ISearchCriteria {
  criteria: any;
  "@type": string;
  owningUserId: string;
  id?: string;
}

export interface IFetchThingsResponse<T> {
  content: T[];
  firstPage: boolean;
  lastPage: boolean;
  totalPages: number;
  id: IAPILink;
  links: IAPILink[];
}
