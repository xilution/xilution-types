import { ICreditCardBrands } from "./enums";

export interface ICreditCard {
  id?: string;
  cvc?: string;
  expMonth: number;
  expYear: number;
  name: string | null;
  number?: string;
  last4?: string;
  brand: ICreditCardBrands;
}
