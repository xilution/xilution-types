export interface IInvoice {
  id: string;
  start: string;
  receipt: {
    paid: boolean;
  };
  total: number;
  currency?: string;
}
