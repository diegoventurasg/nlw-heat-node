import { Request, Response } from "express";
import { GetUserMessagesService } from "../services/GetUserMessagesService";

class GetUserMessagesController {
    async handle(request: Request, response: Response) {
        const { user_id } = request.params;

        const service = new GetUserMessagesService();

        const result = await service.execute(user_id);

        return response.json(result);
    }
}

export { GetUserMessagesController };