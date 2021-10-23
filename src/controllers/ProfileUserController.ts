import { Request, Response } from "express";
import { ProfileUserSerice } from "../services/ProfileUserService";

class ProfileUserController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const service = new ProfileUserSerice();

        const result = await service.execute(user_id);

        return response.json(result);
    }
}

export { ProfileUserController };