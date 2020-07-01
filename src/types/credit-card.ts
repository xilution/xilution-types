export interface ICreditCard {
  id?: string;
  cvc?: string;
  expMonth: number;
  expYear: number;
  name: string | null;
  number?: string;
  brand: 'Visa' | 'American Express' | 'MasterCard' | 'Discover' | 'JCB' | 'Diners Club' | 'Unknown';
}
