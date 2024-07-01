import { v4 as uuid } from "uuid";
import { ProductEntity } from "../../domain/product.entity";
import { ProductRepository } from "../../domain/product.repository";
/**
 * REPOSITORY FOR MOCK DATASOURCE
 */

// const MOCK_PRODUCT = { name: "Ivan"+uuid(), description: "Tapia"+uuid(), sku: uuid(), price: 1000*Math.random() };
const limitMocks = 100

export class MockRepository implements ProductRepository {

  private randomMockProduct = (limit:number)=>{
    return { name: "Ivan "+limit.toString(), description: "Tapia "+limit.toString(), sku: uuid(), price: limit*1000*Math.random() };
  }
  private paginate = (array:any, size:string, page:string) => {
    array = array ?? [];
    page = page ?? 1;
    size = size ?? 10;
    return array.slice((parseInt(page) - 1) * parseInt(size), parseInt(page) * parseInt(size));
  }
  private sort = (array:any, sort='name') => {
    if( sort == 'price' ){
      return array.sort((a:any, b:any) => a.price - b.price)
    }else{
      return array.sort((a:any, b:any) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    }
  }

  async listAllProduct(name:string, page:string, size:string, order:string): Promise<any> {
    // const products = [this.randomMockProduct(1), this.randomMockProduct(2), this.randomMockProduct(3), this.randomMockProduct(4), this.randomMockProduct(5), this.randomMockProduct(6), this.randomMockProduct(7), this.randomMockProduct(8), this.randomMockProduct(9), this.randomMockProduct(10)]
    let products:any[] = []
    for(let index:number=1;index < limitMocks; index++){
      products.push(this.randomMockProduct(index))
    }

    const products_filter = products.filter( (filter_item:any) => { return filter_item.name.includes(name) }  )
    return this.sort(this.paginate(products_filter, size, page), order)
  }
  async findProductById(sku: string): Promise<any> {
    const product = this.randomMockProduct(1)
    return product;
  }
  async registerProduct(productIn: ProductEntity): Promise<any> {
    const product = this.randomMockProduct(1)
    return product;
  }
}
