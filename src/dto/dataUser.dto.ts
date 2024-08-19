export interface userDTO {
  id?: string;
  serv?: string;
  name: string;
  photoURL?: string;
  email: string;
  password: string;
  password2?: string;
  datatime?: string;
  token?: string;
  entrepreneur: boolean;
  createSesionAt?: string;
  id_products?: string[]; //referencias de producto
}
