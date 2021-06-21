import { IUsage } from "./usage";
import { IReceiptSummary } from "./receipt";

export interface IInvoiceSummary {
  id: string;
  date?: string;
  total: number;
  currency?: string;
  start?: string;
  receipt: IReceiptSummary;
}

export interface IInvoiceLine {
  productCode: string;
  dimension: string;
  quantity: number;
  unit: string;
  price: number;
  currency: string;
  total: number;
}

export interface IInvoice {
  id: string;
  organizationId: string;
  start: string;
  end: string;
  usage: IUsage[];
  lines: IInvoiceLine[];
}
