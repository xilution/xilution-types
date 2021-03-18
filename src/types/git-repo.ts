import { IThing } from "./thing";

export interface IGitRepo extends IThing {
  "@type": "git-repo";
  name: string;
  provider: string;
  accountId: string;
}
