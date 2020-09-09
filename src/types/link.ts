export enum ILinkType {
  EXTERNAL = "EXTERNAL",
  INTERNAL = "INTERNAL",
  PATH = "PATH",
}

export const LINK_TYPES: string[] = [ILinkType.EXTERNAL, ILinkType.INTERNAL, ILinkType.PATH];

export interface ILink {
  href: string;
  rel?: string;
  label?: {
    default: string;
    [locale: string]: string;
  };
  type?: string;
}
