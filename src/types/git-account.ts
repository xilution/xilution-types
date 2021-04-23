import { IThing } from "./thing";

export interface IGitAccount extends IThing {
  "@type": "git-account";
  provider: string;
  name: string;
}
