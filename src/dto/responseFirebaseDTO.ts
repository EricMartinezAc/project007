export interface ResponseFirebaseDTO {
  result: any;
  msj: string;
  token?: string;
  user?: string | null;
  rol?: boolean | null;
  datatime?: string;
}
