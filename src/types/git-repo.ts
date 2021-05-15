import { IThing } from "./thing";

type GitRepoStatus = "NOT_FOUND" | "ACTIVE";

export interface IGitRepo extends IThing {
  "@type": "git-repo";
  name: string;
  gitAccountId: string;
  organizationId: string;
  status?: GitRepoStatus;
}
