export interface DataProductsDTO {
  id: string;
  id_user: string; //vendedor
  name: string; // Nombre del producto
  description: string; // Descripción detallada del producto
  price: number; // Precio del producto
  category: string; // Categoría a la que pertenece el producto
  stock: number; // Cantidad disponible en inventario
  imageUrl: string; // URL de la imagen del producto
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
