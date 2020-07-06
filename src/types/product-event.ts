import { IThing } from "./thing";

export interface IProductEvent extends IThing {
  "@type": "product-event";
  details: object;
  event: string;
  organizationId: string;
  productId: string;
  recordId: string;
  recordType: string;
  timestamp: string;
}
