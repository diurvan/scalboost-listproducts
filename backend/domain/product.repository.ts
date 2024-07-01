import { ProductEntity } from "./product.entity";

export interface ProductRepository {
  findProductById(sku: string): Promise<ProductEntity | null>;
  registerProduct(product:ProductEntity): Promise<ProductEntity | null>;
  listAllProduct(name:string, page:string, size:string, order:string): Promise<ProductEntity[] | null>;
}
