import { ProductRepository } from "../domain/product.repository";
import { ProductValue } from "../domain/product.value";

export class ProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  public  registerProduct = async ({ name, description, price }:{ name:string, description:string, price:number }) => {
    const productValue = new ProductValue({ name, description, price });
    const productCreated = await this.productRepository.registerProduct(productValue);
    return productCreated
  }

  public  getDetailProduct = async (uuid:string) => {
    const product = await this.productRepository.findProductById(uuid)
    return product
  }
  
  public  getAllProduct = async (name:string, page:any, size:any, order:string) => {
    const product = await this.productRepository.listAllProduct(name, page, size, order)
    return product
  }
}
