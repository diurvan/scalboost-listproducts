import "dotenv/config";
import express from "express";
import cors from "cors";
import productRoute from "./infrastructure/route/product.route";

const app = express();
app.disable('x-powered-by');
app.use(express.json());

let corsOptions = { 
     origin : ['http://localhost:3000'], 
}    
app.use(cors(corsOptions)) 

const port = process.env.PORT || 3001;

app.use(productRoute);
app.listen(port, () => console.log(`PRODUCT SERVICE, Listo por el puerto ${port}`));
