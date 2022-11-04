import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import DeleteUserService from "../services/DeleteUserService";
import ListUserService from "../services/ListUserService";

export default class UsersController {
    public async list(request: Request, response: Response): Promise<Response> {
        const listUserService = new ListUserService();

        const users =  await listUserService.execute();

        return response.json(users);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const {name, email, password}  = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute(
            {
                name, email, password
            }
        );

        return response.json(user);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const {id}  = request.params;

        const deleteUserService = new DeleteUserService();

        const user = await deleteUserService.execute(
            {
                id
            }
        );

        return response.json(user);
    }


}