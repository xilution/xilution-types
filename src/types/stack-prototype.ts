import { IThing } from "./thing";

export interface IParameterDefinition {
  name: string;
  label: {
    default: string;
    [locale: string]: string;
  };
  helpText?: {
    default: string;
    [locale: string]: string;
  };
  type?: "text" | "number" | "select" | "textarea" | "checkbox";
  validation?: {
    functionName:
      | "VALIDATE_TEXT_FIELD"
      | "VALIDATE_UUID"
      | "VALIDATE_EMAIL_FIELD"
      | "VALIDATE_URL"
      | "VALIDATE_AGAINST_ALLOWED_VALUES"
      | "VALIDATE_DOMAIN";
    parameters: (string | string[] | number)[];
  };
  autoComplete?: string;
  readOnly?: boolean;
  placeholder?: {
    default: string;
    [locale: string]: string;
  };
  initialValue?: string;
  options?: {
    name: {
      default: string;
      [locale: string]: string;
    };
    value?: any;
    disabled?: boolean;
  }[];
  optionsRef?: {
    id: string;
    nameExpression: string;
    valueExpression: string;
  };
}

export interface IReference {
  id: string;
  uri: string;
  filterExpression: string;
  required?: boolean;
}

export interface IStackPrototype extends IThing {
  "@type": "stack-prototype";
  id: string;
  name: string;
  references?: IReference[];
  version: string;
  description: string;
  active: boolean;
  parameterDefinitions: IParameterDefinition[];
}
