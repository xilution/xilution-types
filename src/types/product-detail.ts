export type ICurrency = string | "USD";

export type IUnit = string | "Hours";

export interface IRate {
  metric: {
    name: string;
    qtyCalcStrategy: string;
  };
  currency: ICurrency;
  unit: IUnit;
  price: number;
}

export interface IProductDetails {
  id: string;
  name: string;
  tier: string;
  productName: string;
  productCode: string;
  phase: string;
  usagePlan: {
    type: string;
    rates: IRate[];
  };
  limits: {
    test: {
      throttle: {
        rate: {
          value: number;
          unit: string;
          timescale: string;
        };
        burst: {
          value: number;
          unit: string;
        };
      };
    };
    prod: {
      throttle: {
        rate: {
          value: number;
          unit: string;
          timescale: string;
        };
        burst: {
          value: number;
          unit: string;
        };
      };
    };
  };
  logo: string;
  spec: string;
  portal: string;
  i18n: {
    en: {
      shortDescription: string;
      longDescription: string;
      features: string[];
    };
  };
}