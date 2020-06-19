import { IThing } from "./thing";
import { ICurrency, IUnit } from "./enums";

export interface IRate {
  metric: {
    name: string;
    qtyCalcStrategy: string;
  };
  currency: ICurrency;
  unit: IUnit;
  price: number;
}

export interface IProductDetails extends IThing {
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
    [env: string]: {
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
        quota: {
          value: number;
          unit: string;
          timescale: string;
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

export interface ITierDetails extends IThing {
  name: string;
  logo: string;
  i18n: {
    en: {
      shortDescription: string;
    };
  };
}

export interface IPhaseDetails extends IThing {
  name: string;
  i18n: {
    en: {
      longDescription: string;
    };
  };
}
