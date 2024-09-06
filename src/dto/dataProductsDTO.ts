export interface DataProductsDTO {
  id: string;
  client_id: string; //vendedor
  product_id: string;
  currency: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategorie: string;
  subcategorie2?: string;
  stock_quantity: number;
  images: imagesURL[];
  imgs?: number;
  imgType: string;
  createdAt: Date; // Fecha de creación del producto
  updatedAt: Date; // Fecha de última actualización del producto
  ratings: number; // Valoración del producto (1 a 5 estrellas)
  reviews: Review[]; // Lista de reseñas del producto
  isFeatured: boolean; // Indica si el producto es destacado
  tags?: string[]; // Etiquetas opcionales para el producto
}
interface Review {
  userId: string; // Identificador del usuario que hizo la reseña
  comment: string; // Comentario de la reseña
  rating: number; // Valoración dada por el usuario
  date: Date; // Fecha de la reseña
}
interface imagesURL {
  client_id: string;
  fileName: string;
  url: string;
}
