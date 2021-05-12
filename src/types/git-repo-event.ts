import { IThing } from "./thing";

export interface IGitRepoEvent extends IThing {
  "@type": "git-repo-event";
  gitAccountId: string;
  gitRepoId: string;
  organizationId: string;
  eventType: string;
  parameters: {
    [name: string]: string | boolean;
  };
}
