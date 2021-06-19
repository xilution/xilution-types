import Stripe from "stripe";

export interface IReceiptSummary {
  paid: boolean;
}

export type IReceipt = Stripe.Charge;
