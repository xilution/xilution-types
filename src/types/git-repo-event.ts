import { IThing } from "./thing";

export type GitRepoEventType =
  | "CREATE_REPO"
  | "CREATE_REPO_FROM_TEMPLATE_REPO"
  | "COMMIT_TO_REPO"
  | "DELETE_REPO";

export interface IGitRepoEvent extends IThing {
  "@type": "git-repo-event";
  gitAccountId: string;
  gitRepoId: string;
  organizationId: string;
  eventType: GitRepoEventType;
  parameters?: {
    [name: string]: string | boolean;
  };
}
