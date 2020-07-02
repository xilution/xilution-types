export enum IEnvironment {
  BETA = "beta",
  TEST = "test",
  PROD = "prod",
  SHARED = "shared",
}

export const ENVIRONMENTS: string[] = [
  IEnvironment.BETA,
  IEnvironment.TEST,
  IEnvironment.PROD,
  IEnvironment.SHARED,
];

export enum ICurrency {
  USD = "USD",
}

export const CURRENCIES: string[] = [ICurrency.USD];

export enum IUnit {
  HOURS = "Hours",
  REQUESTS = "requests",
  M_BYTES = "MBytes",
  G_BYTES = "GBytes",
  ONE_THOUSAND_REQUESTS = "One Thousand Requests",
}

export const UNITS: string[] = [
  IUnit.HOURS,
  IUnit.REQUESTS,
  IUnit.M_BYTES,
  IUnit.G_BYTES,
  IUnit.ONE_THOUSAND_REQUESTS,
];

export enum ICreditCardBrands {
  VISA = "Visa",
  AMERICAN_EXPRESS = "American Express",
  MASTER_CARD = "MasterCard",
  DISCOVER = "Discover",
  JCB = "JCB",
  DINERS_CLUB = "Diners Club",
  UNKNOWN = "Unknown",
}

export const CREDIT_CARD_BRANDS: string[] = [
  ICreditCardBrands.VISA,
  ICreditCardBrands.AMERICAN_EXPRESS,
  ICreditCardBrands.MASTER_CARD,
  ICreditCardBrands.DISCOVER,
  ICreditCardBrands.JCB,
  ICreditCardBrands.DINERS_CLUB,
  ICreditCardBrands.UNKNOWN,
];
