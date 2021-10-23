import { Request, Response } from "express";
import { GetUserMessages } from "../services/GetUserMessages";

class GetUserMessagesController {
    async handle(request: Request, response: Response) {
        const { user_id } = request.params;

        const service = new GetUserMessages();

        const result = await service.execute(user_id);

        return response.json(result);
    }
}

export { GetUserMessagesController };