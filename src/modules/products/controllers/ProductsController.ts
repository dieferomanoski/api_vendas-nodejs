import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductService";
import UpdateProductService from "../services/UpdateProductService";


export default class ProductsController {
    public async list(request: Request, response: Response) : Promise<Response> {
        const listProducts = new ListProductService();

        const products = await listProducts.execute();
 
        return response.json(products);
    }

    public async show(request: Request, response: Response) : Promise<Response> {
        const {id} = request.params;

        const showProductService = new ShowProductService();
        
        const product = await showProductService.execute({id});


        return response.json(product);
    }

    public async create(request: Request, response: Response) : Promise<Response> {
        const {name, price, quantity} = request.body;

        const createProductService = new CreateProductService();

        const product = await createProductService.execute(
            {
                name,
                price,
                quantity
            }
        );

        return response.json(product);
    }

    public async update(request: Request, response: Response) : Promise<Response>{
        const { name, price, quantity } = request.body;
        const { id } = request.params;

        const updateProductService = new UpdateProductService();

        const product = await updateProductService.execute({
            id,
            name,
            price,
            quantity
        });

        return response.json(product);
    }

    public async delete(request: Request, response: Response) : Promise<Response>{
        const { id } = request.params;

        const deleteProductService = new DeleteProductService();

        await deleteProductService.execute({id});

        return response.json([]);
    }
}