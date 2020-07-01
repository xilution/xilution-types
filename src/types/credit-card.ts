export interface ICreditCard {
  id?: string;
  cvc: string;
  expMonth: number;
  expYear: number;
  name: string | null;
  number: string;
}
