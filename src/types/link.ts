export enum ILinkType {
  EXTERNAL = "EXTERNAL",
  INTERNAL = "INTERNAL",
}

export const LINK_TYPES: string[] = [ILinkType.EXTERNAL, ILinkType.INTERNAL];

export interface ILink {
  href: string;
  rel?: string;
  label?: {
    default: string;
    [locale: string]: string;
  };
  type?: string;
}
