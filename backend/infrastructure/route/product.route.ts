import { Router } from "express";
import { ProductUseCase } from "../../application/productUseCase";
import { ProductController } from "../controller/product.ctrl";
import { MockRepository } from "../repository/mock.repository";
import { FileRepository } from "../repository/file.repository";

const route = Router()
/** Iniciar Repository **/
const productRepo = new MockRepository()

/** Iniciamos casos de uso **/
const productUseCase = new ProductUseCase(productRepo)

/** Iniciar Product Controller **/
const productCtrl = new ProductController(productUseCase)

route.post(`/v1/product`, productCtrl.insertProductCtrl)
route.get(`/v1/product/:sku`, productCtrl.getOneCtrl)
route.get(`/v1/product`, productCtrl.getAllCtrl)

export default route