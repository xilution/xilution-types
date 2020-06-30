import { IThing } from "./thing";
import { IEffective } from "./shared";

export interface IActivation extends IThing {
  productId: string;
  effective: IEffective;
}
