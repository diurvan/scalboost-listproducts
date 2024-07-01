import { v4 as uuid } from "uuid";
import { ProductEntity } from "../../domain/product.entity";
import { ProductRepository } from "../../domain/product.repository";
/**
 * POSSIBLE REPOSITORY FOR FILE DATASOURCE
 */

const MOCK_PRODUCT = {
    name: "Ivan",
    description: "Tapia",
    sku: "000-000",
    price: 0
  };

export class FileRepository implements ProductRepository {
  async listAllProduct(page:string, size:string): Promise<any> {
    const products = [MOCK_PRODUCT, MOCK_PRODUCT, MOCK_PRODUCT]
    return products;
  }
  async findProductById(sku: string): Promise<any> {
    const product = MOCK_PRODUCT
    return product;
  }
  async registerProduct(productIn: ProductEntity): Promise<any> {
    const product = MOCK_PRODUCT
    product.sku = uuid()
    return product;
  }
}
