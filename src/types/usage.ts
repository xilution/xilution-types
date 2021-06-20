export interface IMetric {
  dimension: string;
  unit: string;
  quantity: number;
}

export interface IUsage {
  metrics: IMetric[];
  productCode: string;
}
