import { v4 as uuid } from "uuid";
import { ProductEntity } from "./product.entity";

export class ProductValue implements ProductEntity {
  sku: string;
  name: string;
  description: string;
  price: number;

  constructor({ name, description, price }: { name: string; description?:string, price?:number }) {
    this.sku = uuid();
    this.name = name;
    this.description = description  ?? "default";
    this.price = price ??0;
  }
}
