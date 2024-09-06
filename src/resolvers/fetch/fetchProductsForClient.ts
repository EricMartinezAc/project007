import { REMOTE_API } from "../../constants/routes";
import { CookiesDTO, productDTO } from "../../dto";
//datos de productos para clientes
export const FetchProductsForClient = async (
  apiClient: any
): Promise<productDTO[]> => {
  if (!apiClient) throw new Error("sin datos");
  const result = await apiClient.get(`${REMOTE_API}`);
  console.log("resultado fetch", result);

  if (result.status !== 200)
    throw new Error("no se cargaron datos del servidor");

  const allProduct = await result.data.map((client: any) => {
    return client.products;
  });
  return allProduct;
};
