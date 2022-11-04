import { Request, Response } from "express";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

export default class UserAvatarController {

    public async update(request: Request, response: Response): Promise<Response> {

        const updateAvatarService = new UpdateUserAvatarService();

        if(request.file?.filename){
            const user = updateAvatarService.execute({user_id: request.user.id, avatarFilename: request.file.filename,})
            return response.json(user);
        }


        return response.json('Avatar filename error');
    }




}