import { Request, Response } from "express";
import { ProductUseCase } from "../../application/productUseCase";

export class ProductController {
  constructor(private productUseCase: ProductUseCase) {
    this.insertProductCtrl = this.insertProductCtrl.bind(this)
    this.getAllCtrl = this.getAllCtrl.bind(this)
    this.getOneCtrl = this.getOneCtrl.bind(this)
  }

  public async getAllCtrl({ query }: Request, res: Response) {
    const { name = '', page = 1, size = 10, order = '' } = query;
    const product = await this.productUseCase.getAllProduct(`${name}`, page, size, `${order}`);
    res.send({ product });
  }

  public async getOneCtrl({params}: Request, res: Response) {
    const { sku = '' } = params;
    const product = await this.productUseCase.getDetailProduct(`${sku}`);
    res.send({ product });
  }

  public async insertProductCtrl({ body }: Request, res: Response) {
    const product = await this.productUseCase.registerProduct(body);
    res.send({ product });
  }
}
