export interface IMessages {
  [key: string]: string | ((props: any) => string);
}
