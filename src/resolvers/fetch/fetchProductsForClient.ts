import { REMOTE_API } from "../../constants/routes";
import { productDTO } from "../../dto";
//datos de productos para clientes
export const FetchProductsForClient = async (
  apiClient: any
): Promise<productDTO[]> => {
  if (!apiClient) throw new Error("sin datos");
  const dateNow = new Date();
  const result = await apiClient.post(`${REMOTE_API}/imgs/products`);
  return [
    {
      id: "string",
      id_user: "string",
      name: "string",
      description: "string",
      price: 0,
      category: "string",
      stock: 0,
      imageUrl: "string",
      createdAt: dateNow,
      updatedAt: dateNow,
      ratings: 0,
      reviews: [],
      isFeatured: false,
      tags: [],
    },
  ];
};
