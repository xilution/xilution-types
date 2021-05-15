import { IThing } from "./thing";

export type GitAccountEventType = string | "CREATE_GIT_ACCOUNT" | "DELETE_GIT_ACCOUNT";

export interface IGitAccountEvent extends IThing {
  "@type": "git-account-event";
  gitRepoId: string;
  organizationId: string;
  eventType: GitAccountEventType;
  parameters?: {
    [name: string]: string | boolean;
  };
}
