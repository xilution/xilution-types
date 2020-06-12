import { IThing } from "./thing";

export interface IClient extends IThing {
  id: string;
  name: string;
}
