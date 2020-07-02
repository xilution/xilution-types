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

export enum ICreditCardBrand {
  VISA = "Visa",
  AMERICAN_EXPRESS = "American Express",
  MASTER_CARD = "MasterCard",
  DISCOVER = "Discover",
  JCB = "JCB",
  DINERS_CLUB = "Diners Club",
  UNKNOWN = "Unknown",
}

export const CREDIT_CARD_BRANDS: string[] = [
  ICreditCardBrand.VISA,
  ICreditCardBrand.AMERICAN_EXPRESS,
  ICreditCardBrand.MASTER_CARD,
  ICreditCardBrand.DISCOVER,
  ICreditCardBrand.JCB,
  ICreditCardBrand.DINERS_CLUB,
  ICreditCardBrand.UNKNOWN,
];

export const mapCreditCardBrand = (creditCardBrand: string): ICreditCardBrand =>  {
  switch (creditCardBrand) {
    case ICreditCardBrand.VISA:
      return ICreditCardBrand.VISA;
    case ICreditCardBrand.AMERICAN_EXPRESS:
      return ICreditCardBrand.AMERICAN_EXPRESS;
    case ICreditCardBrand.MASTER_CARD:
      return ICreditCardBrand.MASTER_CARD;
    case ICreditCardBrand.DISCOVER:
      return ICreditCardBrand.DISCOVER;
    case ICreditCardBrand.JCB:
      return ICreditCardBrand.JCB;
    case ICreditCardBrand.DINERS_CLUB:
      return ICreditCardBrand.DINERS_CLUB;
    case ICreditCardBrand.UNKNOWN:
      return ICreditCardBrand.UNKNOWN;
    default:
      return ICreditCardBrand.UNKNOWN;
  }
};
