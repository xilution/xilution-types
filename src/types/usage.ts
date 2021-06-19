export interface IMetric {
  dimension: string;
  unit: string;
  quantity: string;
}

export interface IUsage {
  metrics: IMetric[];
  productCode: string;
}
