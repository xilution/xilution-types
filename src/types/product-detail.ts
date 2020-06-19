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

export interface IUsagePlan {
  type: string;
  rates?: IRate[];
}

export interface ITimescaleData {
  value: number;
  unit: string;
  timescale: string;
}

export interface IBurst {
  value: number;
  unit: string;
}

export interface IQuota {
  value: number;
  unit: string;
  timescale: string;
}

export interface IThrottle {
  rate: ITimescaleData;
  burst: IBurst;
  quota?: IQuota;
}

export interface ILimit {
  throttle: IThrottle;
}

export interface ILimits {
  [env: string]: ILimit;
}

export interface IProductDetails extends IThing {
  name: string;
  tier: string;
  productName: string;
  productCode: string;
  phase: string;
  usagePlan: IUsagePlan;
  limits: ILimits;
  logo: string;
  spec: string;
  portal?: string;
  i18n: {
    [locale: string]: {
      shortDescription: string;
      longDescription?: string;
      features?: string[];
    };
  };
}

export interface ITierDetails extends IThing {
  name: string;
  logo: string;
  i18n: {
    [locale: string]: {
      shortDescription: string;
    };
  };
}

export interface IPhaseDetails extends IThing {
  name: string;
  i18n: {
    [locale: string]: {
      longDescription: string;
    };
  };
}
