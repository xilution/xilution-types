import { IThing } from "./thing";

type GitAccountStatus = "NOT_FOUND" | "ACTIVE";

export interface IGitAccount extends IThing {
  "@type": "git-account";
  provider: string;
  name: string;
  organizationId: string;
  status?: GitAccountStatus;
}
