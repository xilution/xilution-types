export interface IReceipt {
  paid: boolean;
}

export interface IInvoice {
  id: string;
  start?: string;
  receipt: IReceipt;
  total: number;
  currency?: string;
}
