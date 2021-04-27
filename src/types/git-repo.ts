import { IThing } from "./thing";

export interface IGitRepo extends IThing {
  "@type": "git-repo";
  name: string;
  gitAccountId: string;
  organizationId: string;
  status?: string;
}
